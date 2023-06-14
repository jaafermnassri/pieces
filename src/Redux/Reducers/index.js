import { combineReducers } from "redux";

import {userReducer} from "./userReducer"
import { pieceReducer } from "./pieceReducer";
export const reducers = combineReducers({userReducer,pieceReducer});