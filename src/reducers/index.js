import { combineReducers } from "redux";
import { setTimerReducer } from "./timerSettingsReducers";
import { setMessageReducer } from "./messageReducers";

export default combineReducers({timer:setTimerReducer,message:setMessageReducer
});