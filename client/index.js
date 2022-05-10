import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../src/router";
import { Provider } from "react-redux";
import { getClientStore } from "../src/store";
import Header from "../src/component/header";

const Page = (
  <Provider store={getClientStore()}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        {routes.map((item) => (
          <Route
            key={item.key}
            path={item.path}
            exact
            render={(props) => <item.component {...props} />}
          ></Route>
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>
);

window.__context
  ? ReactDom.hydrate(Page, document.getElementById("root")) // 进行服务端渲染
  : ReactDom.render(Page, document.getElementById("root")); // 进行客户端渲染
