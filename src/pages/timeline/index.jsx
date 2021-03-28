import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetService from "../../services/api/tweetService";

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      tweets: {},
      isLoading: true
    };
  }

  async componentDidMount(){    
    const tweets = await TweetService.GetOwnTweets();
    this.setState({ tweets: {}, tweets: tweets, isLoading: false });
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
    let { tweets } = this.state;
    console.log(tweets);

  
      if (this.state.isLoading){
        return <div className="loading"/>
      }

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
              {tweets.map((tweet) => (
                <TweetCard tweet={tweet}/>
              ))}
            </div>
            <div className="right">

            </div>
          </div>
        </div>
      );
    }
}