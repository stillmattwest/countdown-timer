import React,{Component} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {BiPause,BiPlay,BiReset} from 'react-icons/bi';
import "./TimerControls.css";

class TimerControls extends Component{
    render(){
        return(
            <div className="timer-controls-button-container">
                <Button variant="light" size="lg" className="timer-controls-button"><BiPlay/></Button>
                <Button variant="light" size="lg" className="timer-controls-button"><BiReset/></Button>
            </div>
   
        )
    }
}

export default TimerControls;