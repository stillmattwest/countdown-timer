import render from 'dom-serializer';
import React,{Component} from 'react';
import "./TimerPlaybackControls.css";

class TimerPlaybackControls extends Component{
    render(){
        return(
            <div className="timer-playback-controls-button-group">
                <button>1x</button>
                <button>1.5x</button>
                <button>2x</button>
            </div>
        )
    }
}

export default TimerPlaybackControls;