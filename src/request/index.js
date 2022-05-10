import ajax from './config';

// Banner列表
export const bannerList = () => ajax({
  method: 'GET',
  url: '/banner/list'
});
// 文章列表
export const articleList = (params) => ajax({
  method: 'GET',
  url: '/post/list',
  params
});
// 获取前台用户
export const getClientUser = () => ajax({
  method: 'GET',
  url: '/user/info'
});