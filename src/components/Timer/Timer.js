import React,{Component} from 'react';
import './Timer.css';

class Timer extends Component{

    render(){
        return(
            <div className="timer-container">
                <p className="timer-display">00:00</p>
            </div>
        )
    }
}

export default Timer;