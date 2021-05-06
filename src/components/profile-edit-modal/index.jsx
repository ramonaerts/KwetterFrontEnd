import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import TweetService from "../../services/api/tweetService";

export default class ProfileEditModal extends Component {
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
  }
  
  render(){
  
    let { user } = this.props;

      if (this.state.isLoading){
        return <div className="loading"/>
      }

      return (
        <div>
            <Button className="tweet-button" onClick={this.handleShow}>Edit Profile</Button>
            <Modal className="tweet-modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.tweet}>
                    <Modal.Body>
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control className="edit-profile-content" name="nickname" type="text" value={user.nickname} placeholder="Nickname"/>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="edit-profile-content" name="email" type="email" value={user.email} placeholder="Email"/>                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="confirm-profile-button" type="submit">Confirm changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>

      );
    }
}