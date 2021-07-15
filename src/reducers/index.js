import { combineReducers } from "redux";
import { setTimerMinsReducer,setTimerSecsReducer,setInitialTimeReducer } from "./timerSettingsReducers";
import { setMessageReducer } from "./messageReducers";
import {setPauseReducer,setTimerRunningReducer} from "./playPauseReducers";
import { setTimerSpeedReducer,setDarkModeReducer } from "./timerPlaybackReducers";

export default combineReducers({timerMins:setTimerMinsReducer,timerSecs:setTimerSecsReducer,message:setMessageReducer,paused:setPauseReducer,timerRunning:setTimerRunningReducer,timerSpeed:setTimerSpeedReducer,darkMode:setDarkModeReducer,initialTime:setInitialTimeReducer
});