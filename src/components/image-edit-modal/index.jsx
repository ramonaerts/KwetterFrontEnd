import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import FileService from "../../services/api/fileService";

export default class ImageEditModal extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      isLoading: true,
      preview: null,
      files: [],
      filename: "Select image",
      submitImage: true
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

  onImageChange = (e) => {

    this.setState({ preview: URL.createObjectURL(e.target.files[0])})

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);     

    if (filesArr.length === 0) this.setState({ files: [], filename: "Select image", submitImage: true });
    else this.setState({ files: [...this.state.files, ...filesArr], filename: filesArr[0].name, submitImage: false });      
  }

  async editImage(event){
    // event.preventDefault();

    // const formData = new FormData(event.target);
    // const formDataObj = Object.fromEntries(formData.entries());

    // await TweetService.SendTweet(formDataObj);
  }
  
  render(){
  
    const { preview } = this.state;
    const { filename } = this.state;
    const { submitImage } = this.state;    

      if (this.state.isLoading){
        return <div className="loading"/>
      }

      return (
        <div>
            <div className="edit-image" onClick={this.handleShow}>Edit</div>
            <Modal className="tweet-modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Change image</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.editImage}>
                    <Modal.Body>
                        <Form.Label className="profileimageinput">
                            <Form.Control name="tweetcontent" type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.onImageChange}/>
                            {filename}
                        </Form.Label>    
                        <img className="imagepreview" src={preview}/>                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="confirm-profile-button" type="submit" disabled={submitImage}>Confirm changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>

      );
    }
}