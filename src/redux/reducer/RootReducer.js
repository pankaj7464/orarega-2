import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer"
import toggleReducer from "./toggleReducer";
const RootReducer = combineReducers({
   user: userReducer,
   toggle:toggleReducer
})

export default RootReducer;