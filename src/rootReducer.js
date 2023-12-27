import { combineReducers } from "redux";
import mainContentReducer from "./reducers/mainContentReducer";

export default function rootReducer(injectedReducers) {
    return combineReducers({
          mainContentReducer,
    })
}