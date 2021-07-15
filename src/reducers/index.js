import { combineReducers } from "redux";
import { setTimerMinsReducer,setTimerSecsReducer } from "./timerSettingsReducers";
import { setMessageReducer } from "./messageReducers";
import {setPauseReducer} from "./playPauseReducers";

export default combineReducers({timerMins:setTimerMinsReducer,timerSecs:setTimerSecsReducer,message:setMessageReducer,paused:setPauseReducer
});