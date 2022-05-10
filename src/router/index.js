import Home from "../pages/home"
import Posts from "../pages/posts"
import About from "../pages/about"

const routes = [
  {
    path: '/',
    name: '首页',
    exact: true,
    key: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: '文章',
    exact: true,
    key: 'posts',
    component: Posts
  },
  {
    path: '/about',
    name: '关于',
    exact: true,
    key: 'about',
    component: About
  }
];

export default routes;
