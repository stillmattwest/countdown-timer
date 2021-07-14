import React from "react";
import TimerSettings from "../TimerSettings/TimerSettings";
import Message from "../Message/Message"
import Timer from "../Timer/Timer";
import TimerControls from "../TimerControls/TimerControls";
import TimerPlaybackControls from "../TimerPlaybackControls/TimerPlaybackControls";

const App = () => {
    return(
        <div>
            <h1>Countdown Timer</h1>
            <TimerSettings></TimerSettings>
            <Message></Message>
            <Timer></Timer>
            <TimerControls></TimerControls>
            <TimerPlaybackControls></TimerPlaybackControls>
        </div>
    )
}

export default App;