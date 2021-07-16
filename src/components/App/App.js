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

    selectLightOrDark = () => {
        // sets css stylesheet based on props
        try{
            if(this.props.darkMode){
                return <Helmet>
                    <title>React Countdown Timer</title>
                    <link rel="stylesheet" href="darkly/bootstrap.min.css"></link>
                </Helmet>
            }else{
                return <Helmet>
                    <title>React Countdown Timer</title>
                    <link rel="stylesheet" href="flatly/bootstrap.min.css"></link>
                </Helmet>
            }
        }catch(err){
            console.log(`components.App.selectLightOrDark: ${err}`);
        }
        
    }    

    render(){
        return(
            <Container className="app-container">
                {this.selectLightOrDark()}
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