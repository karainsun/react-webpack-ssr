import { bannerList, articleList, getClientUser } from '../../request'

export const setBanners = (banners) =>({
  type: 'SET_BANNERS',
  banners
});
export const setPosts = (posts) =>({
  type: 'SET_POSTS',
  posts: posts.list
});
export const setUserInfo = (userInfo) =>({
  type: 'SET_USER_INFO',
  userInfo
});

export const getBanners = () => {
  return (dispatch) => {
      return bannerList().then(res => {
          dispatch(setBanners(res.data)) 
      })
  }
}

export const getPosts = () => {
  return (dispatch) => {
      return articleList({
        pageNo: 1,
        pageSize: 1000,
        title: '',
        category: ''
      }).then(res => {
          dispatch(setPosts(res.data)) 
      })
  }
}

export const getUserInfo = () => {
  return (dispatch) => {
      return getClientUser().then(res => {
          dispatch(setUserInfo(res.data)) 
      })
  }
}