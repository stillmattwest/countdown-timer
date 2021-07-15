import { combineReducers } from "redux";
import { setTimerReducer } from "./timerSettingsReducers";
import { setMessageReducer } from "./messageReducers";
import {setPauseReducer} from "./playPauseReducers";

export default combineReducers({timer:setTimerReducer,message:setMessageReducer,paused:setPauseReducer
});