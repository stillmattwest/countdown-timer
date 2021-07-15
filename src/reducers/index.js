import { combineReducers } from "redux";
import { setTimerReducer } from "./timerSettingsReducers";

export default combineReducers({timer:setTimerReducer
});