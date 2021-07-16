import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import {BiPause,BiPlay,BiReset} from 'react-icons/bi';
import {connect} from 'react-redux';
import {setTimerMins,setTimerSecs,setInitialTime} from '../../actions/timerSettingsActions';
import {setPause,setTimerRunning} from '../../actions/playPauseActions';
import { setTimerSpeed } from '../../actions/timerPlaybackActions';
import { setMessage } from '../../actions/messageActions';
import "./TimerControls.css";

class TimerControls extends Component{

    componentDidMount(){
        this.props.setPause(true);
    }

    runTimer = () => {
        try{
            this.props.setTimerRunning(true);
            let timerSpeed = this.props.timerSpeed ? this.props.timerSpeed : 1000;
            const context = this;
            var runningTimer = setInterval(timer,timerSpeed);
            function timer(){
                let initialTime = context.props.initialTime;
                let mins = context.props.timerMins;
                let secs = context.props.timerSecs;
                let paused = context.props.paused;
                // check to see if speed has changed
                let newSpeed = context.props.timerSpeed;
                let speedChanged = newSpeed !== timerSpeed;
                if(speedChanged){
                    // if speed has changed, reset timer with new speed
                    timerSpeed = newSpeed;
                    clearInterval(runningTimer);
                    runningTimer = setInterval(timer,timerSpeed);
                }
                if(paused){
                    clearInterval(runningTimer);
                }
                if(secs > 0){
                    secs --;
                    // check halfway done for odd initialTime
                    if(initialTime % 2 !== 0 && mins < initialTime / 2 && secs < 30){
                        context.props.setMessage('More than halfway there!');
                    }
                    context.props.setTimerSecs(secs);
                }else{
                    if(mins > 0){
                        secs = 59;
                        mins --;
                        // check halfway done for even initialTime
                        if(initialTime % 2 === 0 && mins < initialTime / 2){
                            context.props.setMessage('More than halfway there!');
                        }
                        context.props.setTimerMins(mins);
                        context.props.setTimerSecs(secs);
                    }else{
                        context.props.setMessage("Time's up!");
                        clearInterval(runningTimer);
                    }
                }
            }
            
            

            }catch(err){
            console.log(`components.TimerControls.runTimer: ${err}`);
        }
    }

    handlePlayPauseClick = () => {
        try{
            if(this.props.paused || this.props.paused === false){
                if(this.props.paused){
                    this.props.setPause(false);
                    if(!this.props.timerRunning){
                        this.runTimer();
                    }
                }else{
                    this.props.setPause(true);
                    this.props.setTimerRunning(false);
                }
            }

        }catch(err){
            console.log(`components.TimerControls.handlePlayPauseClick: ${err}`);
        }
    }

    handleResetClick = () => {
        try{
            this.props.setTimerMins(0);
            this.props.setTimerSecs(0);
            this.props.setPause(true);
            this.props.setTimerRunning(false);
            this.props.setTimerSpeed(1000);
            this.props.setMessage('');
            this.props.setInitialTime('');
        }catch(err){
            console.log(`components.TimerControls.handleResetClick: ${err}`);
        }
    }

    renderPlayPauseIcon = () => {
        if(this.props.paused || this.props.paused === undefined){
            return <span className="timer-controls-play-button"><BiPlay/></span>
        }else{
            return <span className="timer-controls-pause-button"><BiPause/></span>
        }
    }

    renderResetIcon = () => {
        return <span className="timer-controls-reset-button"><BiReset/></span>
    }


    render(){
        return(
            <div className="timer-controls-button-container">
                <Button variant="light" size="lg" className="timer-controls-button" onClick={this.handlePlayPauseClick}>{this.renderPlayPauseIcon()}</Button>
                <Button variant="light" size="lg" className="timer-controls-button" onClick={this.handleResetClick}>{this.renderResetIcon()}</Button>
            </div>
   
        )
    }
}

const mapStateToProps = (state) => {
    return{timer:state.timer,paused:state.paused,timerMins:state.timerMins,timerSecs:state.timerSecs,timerSpeed:state.timerSpeed,initialTime:state.initialTime}
}

export default connect(mapStateToProps,{setTimerMins,setTimerSecs,setPause,setTimerRunning,setTimerSpeed,setMessage,setInitialTime})(TimerControls);