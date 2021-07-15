import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import {BiPause,BiPlay,BiReset} from 'react-icons/bi';
import {connect} from 'react-redux';
import {setTimerMins,setTimerSecs} from '../../actions/timerSettingsActions';
import {setPause} from '../../actions/playPauseActions';
import "./TimerControls.css";

class TimerControls extends Component{

    componentDidMount(){
        this.props.setPause(true);
    }

    handlePlayPauseClick = () => {
        try{
            if(this.props.paused || this.props.paused === false){
                if(this.props.paused){
                    this.props.setPause(false)
                }else{
                    this.props.setPause(true);
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


    render(){
        return(
            <div className="timer-controls-button-container">
                <Button variant="light" size="lg" className="timer-controls-button" onClick={this.handlePlayPauseClick}>{this.renderPlayPauseIcon()}</Button>
                <Button variant="light" size="lg" className="timer-controls-button" onClick={this.handleResetClick}><BiReset/></Button>
            </div>
   
        )
    }
}

const mapStateToProps = (state) => {
    return{timer:state.timer,paused:state.paused}
}

export default connect(mapStateToProps,{setTimerMins,setTimerSecs,setPause})(TimerControls);