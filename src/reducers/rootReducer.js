import combineReducers from "react-combine-reducers";
import { authReducer } from "./authReducer";

export const [appReducer, appInitialState] = combineReducers({
  auth: [authReducer, {}],
});
