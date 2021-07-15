import React from 'react';
import './Message.css';
import { Container,Row,Col,Alert } from 'react-bootstrap';

const Message = () => {
    return(
        <Container>
            <Col lg={{span:6,offset:3}}>
                <Alert variant='warning' className="message-alert">Message Component</Alert>
            </Col>
        </Container>
        
    )
}

export default Message;