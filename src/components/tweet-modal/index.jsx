import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import TweetService from "../../services/api/tweetService";

export default class TweetModal extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      isLoading: true
    };
  }

  async componentDidMount(){
    this.setState({ isLoading: false });
  }

  handleClose(){
		this.setState({ show: false });
	}

	handleShow(){
		this.setState({ show: true });
  }

  async tweet(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    await TweetService.SendTweet(formDataObj);

    window.dispatchEvent(
      new CustomEvent("new-tweet")
    );
  }
  
  render(){
  
      if (this.state.isLoading){
        return <div className="loading"/>
      }

      return (
        <div>
            <Button className="tweet-button" onClick={this.handleShow}>Tweet</Button>
            <Modal className="tweet-modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Tweet</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.tweet}>
                    <Modal.Body>
                    <Form.Control className="send-tweet-content" name="tweetcontent" type="text" placeholder="Wat houdt je bezig?" />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="send-button" type="submit">Tweet</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>

      );
    }
}