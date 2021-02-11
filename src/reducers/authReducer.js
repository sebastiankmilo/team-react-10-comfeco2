import { types } from "../store/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    
    case types.login:
      return {
        ...action.payload
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
