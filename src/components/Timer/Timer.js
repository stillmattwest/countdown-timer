import React,{Component} from 'react';
import { Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setTimerMins,setTimerSecs } from '../../actions/timerSettingsActions';
import './Timer.css';

class Timer extends Component{
    componentDidMount(){
        this.props.setTimerMins(0);
        this.props.setTimerSecs(0);
    }

    renderTimerDisplay = () => {
        try{
            if((this.props.timerMins || this.props.timerMins === 0) && (this.props.timerSecs || this.props.timerSecs === 0)){
                let mins = this.props.timerMins;
                let secs = this.props.timerSecs;
                let displayMins = mins >= 10 ? `${mins}`:`0${mins}
                `;
                let displaySecs = secs >=10 ? `${secs}`:`0${secs}`;

                return `${displayMins}:${displaySecs}`;
            }else{
                throw new Error('timer missing props');
            }
        }catch(err){
            console.log(`components.Timer.renderTimerDisplay: ${err}`);
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
    return{timerMins:state.timerMins,timerSecs:state.timerSecs}
}

export default connect(mapStateToProps,{setTimerMins,setTimerSecs})(Timer);