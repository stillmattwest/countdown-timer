import React,{Component} from "react";
import {Container,Form,Row,Col,Button} from "react-bootstrap";
import "./TimerSettings.css";

class TimerSettings extends Component {
    constructor(props){
        super(props);
        this.state = {
            countdownValue:0
        }
    }
    

    handleCountdownSubmit = (e) => {
        console.log('form submit detected');
        e.preventDefault();
    }

    handleCountdownChange = (e) => {
        this.setState({countdownValue:e.target.value?e.value:''});
        
    }

    render(){
        return(
            <Container fluid className="timer-settings-container">
                <Form onSubmit={this.handleCountdownSubmit}>
                    <Row>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
                            <Form.Label column="lg" sm={{span:3,offset:4}} className="timer-settings-countdown-label">Countdown:</Form.Label>
                            <Col sm={2}>
                                <Form.Control size="lg" type="text" placeholder="enter minutes" className="timer-settings-minute-input"></Form.Control>
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
            
           
        )
    }
   
}

export default TimerSettings;