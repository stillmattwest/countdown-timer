import { combineReducers } from "redux";
import { setTimerMinsReducer,setTimerSecsReducer } from "./timerSettingsReducers";
import { setMessageReducer } from "./messageReducers";
import {setPauseReducer,setTimerRunningReducer} from "./playPauseReducers";
import { setTimerSpeedReducer } from "./timerPlaybackReducers";

export default combineReducers({timerMins:setTimerMinsReducer,timerSecs:setTimerSecsReducer,message:setMessageReducer,paused:setPauseReducer,timerRunning:setTimerRunningReducer,timerSpeed:setTimerSpeedReducer
});