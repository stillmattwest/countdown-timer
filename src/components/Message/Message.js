import React,{Component} from 'react';
import { Container,Col,Alert } from 'react-bootstrap';
import {connect} from 'react-redux';
import './Message.css';

class Message extends Component {

    renderMessageText = () => {
        try{
            if(this.props.message){
                return this.props.message;
            }
    
            return '';
        }catch(err){
            console.log(`components.Message.renderMessageText: ${err}`);
        }
        
    }
    render(){
        return(
            <Container>
                <Col lg={{span:6,offset:3}}>
                    <Alert variant='warning' className="message-alert">{this.renderMessageText()}</Alert>
                </Col>
            </Container>
            
        )
    }
    
}

const mapStateToProps = (state) => {
    return{message:state.message}
}

export default connect(mapStateToProps)(Message);