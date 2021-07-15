import render from 'dom-serializer';
import React,{Component} from 'react';
import { Container,Row,Col,Button,ButtonGroup } from 'react-bootstrap';
import {connect} from 'react-redux';
import {setTimerSpeed} from '../../actions/timerPlaybackActions';
import "./TimerPlaybackControls.css";

class TimerPlaybackControls extends Component{
    componentDidMount(){
        this.setTimerSpeed(1000);
    }

    setTimerSpeed = (speed) => {
        try{
            this.props.setTimerSpeed(speed);
        }catch(err){
            console.log(`components.TimerPlaybackControls.setTimerSpeed: ${err}`);
        }
    }

    render(){
        return(
            <Container>
                <Col sm={{span:6,offset:3}}>
                    <Button variant="dark" size="lg" className="timer-playback-control-button" onClick={() => this.setTimerSpeed(1000)}>1x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button" onClick={() => this.setTimerSpeed(750)}>1.5x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button" onClick={() => this.setTimerSpeed(500)}>2x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button dark-mode-button">Dark Mode</Button>
                </Col>
                
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{timerSpeed:state.timerSpeed}
}

export default connect(mapStateToProps,{setTimerSpeed})(TimerPlaybackControls);