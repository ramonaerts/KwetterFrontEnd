import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    };
  }

  handleClose = () => {
		this.setState({ show: false });
	}

	handleShow = () => {
		this.setState({ show: true });
  }

  async tweet(){

  }
  
  render(){
      return (
        <div>
          <div className="header">
            <Header pageName="Timeline" />
          </div>   
          <div className="timeline-container">         
            <div className="left">
              <Button className="tweet-button" onClick={this.handleShow}>Tweet</Button>
              <Modal className="tweet-modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                  <Modal.Title>Tweet</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.tweet}>
                <Modal.Body>
                  <Form.Control className="send-tweet-content" name="tweet" type="text" placeholder="Wat houdt je bezig?" />
                </Modal.Body>
                <Modal.Footer>
                  <Button className="send-button" type="submit">Tweet</Button>
                </Modal.Footer>
                </Form>
              </Modal>
            </div>
            <div className="middle">
              <TweetCard/>
              <TweetCard/>
              <TweetCard/>
              <TweetCard/>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
      );
    }
}