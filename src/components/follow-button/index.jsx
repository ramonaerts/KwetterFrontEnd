import React, { Component } from "react";
import { Button } from "react-bootstrap"
import FollowService from "../../services/api/followService";
import "./index.css";

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follows: this.props.follows,
      id: this.props.id,
      text: "Following"
    };
  }

  followUser = async() => {
    var result = await FollowService.FollowUser(this.state.id);

    if(result.isSuccess === true) this.setState({follows: true});
  }

  unFollowUser = async() => {
    var result = await FollowService.UnFollowUser(this.state.id);

    if(result.isSuccess === true) this.setState({follows: false});
  }

  setText(text){
    this.setState({ text: text });
  }
  
  render(){

    const { follows } = this.state;
    const { text } = this.state;

      return (
        <div>
          {
            follows === false ?
              <Button className="follow-button" onClick={this.followUser}>Follow</Button>
            :
              <Button className="unfollow-button" onClick={this.unFollowUser} onMouseEnter={() => this.setText("Unfollow")} onMouseLeave={() => this.setText("Following")}>{text}</Button>
          }            
        </div>
      );
    }
}