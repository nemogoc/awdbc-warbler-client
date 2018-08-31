import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {}
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        //turn empty object into false, else if keys, true
        //could also do !!Object.keys(action.user).length, since empty obj is falsey
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user
      };
    default:
      return state;
  }
};
