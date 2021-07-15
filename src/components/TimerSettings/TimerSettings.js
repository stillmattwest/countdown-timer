import React,{Component} from "react";
import {Container,Form,Row,Col} from "react-bootstrap";
import {connect} from 'react-redux';
import {setTimerMins,setTimerSecs,setInitialTime} from '../../actions/timerSettingsActions';
import {setMessage} from '../../actions/messageActions';
import "./TimerSettings.css";

class TimerSettings extends Component {
    

    handleCountdownChange = (e) => {
        try{
            let mins = parseInt(e.target.value);
            if(!isNaN(mins) || e.target.value === ''){
                if(e.target.value === ''){
                    this.props.setMessage('');
                    this.props.setInitialTime(0);
                    this.props.setTimerMins(0);
                    this.props.setTimerSecs(0);
                }else if(mins <= 99){
                    this.props.setMessage('');
                    this.props.setTimerMins(mins);
                    this.props.setTimerSecs(0);
                    this.props.setInitialTime(mins);
                }else{
                    this.props.setMessage('Number of minutes must be less than 100');
                }
                
            }else{
                this.props.setMessage('Please enter a number');
            }
        }catch(err){
            if(err){
                console.log(`components.TimerSettings.handleCountdownChange: ${err}`);
            }
        }
    }

    renderTimerInput = () => {
        try{
            if(this.props.initialTime){
                return this.props.initialTime
            }else{
                return '';
            }
        }catch(err){
            console.log(`components.TimerSettings.renderTimerInput: ${err}`);
        }
    }

    render(){
        return(
            <Container fluid className="timer-settings-container">
                <Form>
                    <Row>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                            <Form.Label column="lg" sm={{span:3,offset:4}} className="timer-settings-countdown-label">Countdown:</Form.Label>
                            <Col sm={2}>
                                <Form.Control size="lg" type="text" placeholder="# of minutes" className="timer-settings-minute-input" onChange={this.handleCountdownChange} value={this.renderTimerInput()}></Form.Control>
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
            
           
        )
    }
   
}

const mapStateToProps = (state) => {
    return{timerMins:state.timerMins,timerSecs:state.timerSecs,initialTime:state.initialTime}
}

export default connect(mapStateToProps,{setTimerMins,setTimerSecs,setMessage,setInitialTime})(TimerSettings);