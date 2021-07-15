import React,{Component} from "react";
import {Container,Form,Row,Col} from "react-bootstrap";
import {connect} from 'react-redux';
import {setTimerMins,setTimerSecs} from '../../actions/timerSettingsActions';
import {setMessage} from '../../actions/messageActions';
import "./TimerSettings.css";

class TimerSettings extends Component {
    

    handleCountdownChange = (e) => {
        try{
            let mins = parseInt(e.target.value);
            if(!isNaN(mins) || e.target.value === ''){
                if(e.target.value === ''){
                    this.props.setMessage('');
                    this.props.setTimerMins(0);
                    this.props.setTimerSecs(0);
                }else if(mins <= 99){
                    this.props.setMessage('');
                    this.props.setTimerMins(mins);
                    this.props.setTimerSecs(0);
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
            if(this.props.timerMins){
                return this.props.timerMins
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
    return{timerMins:state.timerMins,timerSecs:state.timerSecs}
}

export default connect(mapStateToProps,{setTimerMins,setTimerSecs,setMessage})(TimerSettings);