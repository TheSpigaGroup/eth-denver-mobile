const trustee = (state = {}, action) => {
  switch (action.type) {
  case 'SET_WALLET':
    return {
      ...state,
      ...action,
    };
  case 'GET_WHITELIST':
    return {
      ...state,
      whiteList: action.whiteList,
    };
  default:
    return state;
  }
};

export default trustee;
