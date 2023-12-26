import { combineReducers } from "redux"
import AuthReducer from "../redux/slices/auth.slice"

const rootReducer = combineReducers({
  auth: AuthReducer,
})

export default rootReducer
