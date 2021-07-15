import render from 'dom-serializer';
import React,{Component} from 'react';
import { Container,Row,Col,Button,ButtonGroup } from 'react-bootstrap';
import "./TimerPlaybackControls.css";

class TimerPlaybackControls extends Component{
    render(){
        return(
            <Container>
                <Col sm={{span:6,offset:3}}>
                    <Button variant="dark" size="lg" className="timer-playback-control-button">1x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button">1.5x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button">2x</Button>
                    <Button variant="dark" size="lg" className="timer-playback-control-button dark-mode-button">Dark Mode</Button>
                </Col>
                
            </Container>
        )
    }
}

export default TimerPlaybackControls;