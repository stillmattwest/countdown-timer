import React,{Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import './Timer.css';

class Timer extends Component{

    renderTimerDisplay = () => {
        if(this.props.timer){
            let mins = this.props.timer;
            let displayMins = mins >= 10 ? `${mins}`:`0${mins}`;
            // TODO get this working
            let displaySecs = '00';

            return `${displayMins}:${displaySecs}`;
        }else{
            return '00:00';
        }
    }

    render(){
        return(
            <Container>
                <p className="timer-display">{this.renderTimerDisplay()}</p>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{timer:state.timer}
}

export default connect(mapStateToProps)(Timer);