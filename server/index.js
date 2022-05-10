import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
// import proxy from "http-proxy-middleware";
import { StaticRouter, matchPath, Route, Switch } from "react-router-dom";
import routes from "../src/router";
import { Provider } from "react-redux";
import { getServerStore } from "../src/store";
import Header from "../src/component/header";
import path from "path";
import fs from "fs";

const app = express();
const port = 9090

// 设置静态资源地址
app.use(express.static("public"));

const store = getServerStore();

function csrRender(res) {
  // 读取文件返回
  const filename = path.resolve(process.cwd(), "public/src/index.html");
  const html = fs.readFileSync(filename, "utf-8");
  res.send(html);
}
// 匹配所有路由
app.get("*", (req, res) => {
  if (req.query._mode == "csr") {
    console.log("url参数开启csr降级");
    return csrRender(res);
  }

  // 根据路由渲染出的组件，并且拿到loadData方法，获取数据，存储网络请求
  const promises = [];
  routes.map((route) => {
    const match = matchPath(req.path, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) {
        const promise = new Promise((resolve, reject) => {
          loadData(store).then(resolve).catch(resolve);
        });
        promises.push(promise);
      }
    }
  });

  // allSettled
  Promise.all(promises)
    .then(() => {
      const context = {
        css: [],
      };
      // 由于node不支持jsx，使用react-dom/server自带的renderToString进行转换
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Header></Header>
            <Switch>
              {routes.map((route) => (
                <Route {...route}></Route>
              ))}
            </Switch>
          </StaticRouter>
        </Provider>
      );

      if (context.statusCode) {
        res.status(context.statusCode);
      }

      if (context.action === "REPLACE") {
        res.redirect(301, context.url);
      }

      const css = context.css.join("\n");
      // 返回一个html结构，并添加需要渲染的组件，并引入client中的JS进行数据操作。同构触发。
      res.send(`
    <html>
        <head>
            <meta charset="utf-8" />
            <title>react ssr</title>
            <style>
              ${css}
            </style>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
              window.__context = ${JSON.stringify(store.getState())}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>    
    `);
    })
    .catch(() => {
      res.send("报错了500");
    });
});

// 启动服务
app.listen(port, () => {
  console.log(`打开：http://localhost:${port}`);
});
