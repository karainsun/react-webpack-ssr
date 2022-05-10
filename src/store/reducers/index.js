import initState from '../state';
import actionTypes from '../actionTypes';
import { produce } from 'immer' 

const storeData = produce((draft = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNERS:
      draft.banners = action.banners;
      break;
    case actionTypes.SET_POSTS:
      draft.posts = action.posts;
      break;
    case actionTypes.SET_USER_INFO:
      draft.userInfo = action.userInfo;
      break;
    default:
      break;
  }
  return draft;
});

export default storeData;
