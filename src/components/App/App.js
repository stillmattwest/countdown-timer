import React,{Component} from "react";
import TimerSettings from "../TimerSettings/TimerSettings";
import Message from "../Message/Message"
import Timer from "../Timer/Timer";
import TimerControls from "../TimerControls/TimerControls";
import TimerPlaybackControls from "../TimerPlaybackControls/TimerPlaybackControls";
import { Container,Row,Col} from "react-bootstrap";
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import "bootswatch/dist/flatly/bootstrap.min.css"

import "./App.css";

class App extends Component{

    toggleDarkMode = () => {
        if(this.props.darkMode){
            // darkMode is active. Toggle to Flatly
            return <Helmet>
                <title>React Countdown Timer</title>
                <link rel="stylesheet" href="flatly/bootstrap.min.css"></link>
            </Helmet>
        }else{
            return <Helmet>
                <title>React Countdown Timer</title>
                <link rel="stylesheet" href="darkly/bootstrap.min.css"></link>
            </Helmet>
        }
    }    

    render(){
        return(
            <Container className="app-container">
                {this.toggleDarkMode()}
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
    
}

const mapStateToProps = (state) => {
    return{darkMode:state.darkMode}
}

export default connect(mapStateToProps)(App);