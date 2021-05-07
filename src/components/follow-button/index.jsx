import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follows: this.props,
      text: "Following"
    };
  }

  // async componentDidMount(){
  //   const follows = await FollowService.CheckIfFollows(this.props.id);    

  //   this.setState({ follows: follows });
  // }

  setText(text){
    this.setState({ text: text });
  }
  
  render(){

    const { follows } = this.state;
    const { text } = this.state;

      return (
        <div>
          {
            follows.follows === false ?
              <Button className="follow-button">Follow</Button>
            :
              <Button className="unfollow-button" onMouseEnter={() => this.setText("Unfollow")} onMouseLeave={() => this.setText("Following")}>{text}</Button>
          }            
        </div>
      );
    }
}