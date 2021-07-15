import React,{Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Timer.css';

class Timer extends Component{

    render(){
        return(
            <Container>
                <p className="timer-display">00:00</p>
            </Container>
        )
    }
}

export default Timer;