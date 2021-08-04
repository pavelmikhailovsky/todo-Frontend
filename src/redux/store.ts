import { createStore } from "redux";
import appReducer from "./reducer";
//@ts-ignore
const store = createStore(appReducer)

export default store