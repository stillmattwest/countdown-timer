import React from "react";
import TimerSettings from "../TimerSettings/TimerSettings";
import Message from "../Message/Message"
import Timer from "../Timer/Timer";
import TimerControls from "../TimerControls/TimerControls";
import TimerPlaybackControls from "../TimerPlaybackControls/TimerPlaybackControls";
import { Container,Row,Col} from "react-bootstrap";
import "bootswatch/dist/flatly/bootstrap.min.css"
import "./App.css";

const App = () => {
    return(
        <Container className="app-container">
            <Row>
                <TimerSettings></TimerSettings>
            </Row>
            <Row>
                <Message></Message>
            </Row>
            <Row>
                <Col lg={{span:6,offset:3}}>
                    <Timer></Timer>
                </Col>
                <Col lg={{span:1}}>
                    <TimerControls></TimerControls>
                </Col>
            </Row>
            <Row>
                <TimerPlaybackControls></TimerPlaybackControls>
            </Row>
             
        </Container>
       
    )
}

export default App;