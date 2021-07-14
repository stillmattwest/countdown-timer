import React,{Component} from 'react';
import "./TimerControls.css";

class TimerControls extends Component{
    render(){
        return(
            <div className="timercontrols-button-group">
                    <button>Play/Pause</button>
                    <button>Reset</button>
                </div>
        )
    }
}

export default TimerControls;