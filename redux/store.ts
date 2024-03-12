import { applyMiddleware, createStore } from "redux";
import {fetchReducer} from "./Reducer"
import { thunk } from "redux-thunk";

 export const store = createStore(fetchReducer,applyMiddleware(thunk))