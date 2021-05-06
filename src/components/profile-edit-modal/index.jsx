import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import ProfileService from "../../services/api/profileService";

export default class ProfileEditModal extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,      
      id: props.user.id,
      nickname: props.user.nickname,
      email: props.user.email,
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

  handleNicknameChange(value){
      this.setState({ nickname: value });
  }

  handleEmailChange(value){
    this.setState({ email: value });
}

   editProfile = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('id', this.state.id);

    const formDataObj = Object.fromEntries(formData.entries());

    console.log(formDataObj);

    await ProfileService.EditProfile(formDataObj);
  }
  
  render(){

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
                <Form onSubmit={this.editProfile}>
                    <Modal.Body>
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control className="edit-profile-content" name="nickname" type="text" value={this.state.nickname} onChange={e => this.handleNicknameChange(e.target.value)} placeholder="Nickname"/>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="edit-profile-content" name="email" type="email" value={this.state.email} onChange={e => this.handleEmailChange(e.target.value)} placeholder="Email"/>                        
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