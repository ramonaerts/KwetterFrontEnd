import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import TweetService from "../../services/api/tweetService";
import { VscVerified } from "react-icons/vsc"

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      tweets: {},
      isLoading: true
    };
  }

  async componentDidMount(){    
    const tweets = await TweetService.GetOwnTweets();
    this.setState({ tweets: {}, tweets: tweets, isLoading: false });
  }
  
  render(){
    let { tweets } = this.state;
  
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
                <div className="profile-container">
                    <div className="profileimage" style={{ backgroundImage: `url(https://localhost:50001/profile/images/mgk.png)`}}/>
                    <div className="profile-names-container">
                        <div className="profile-name">Ra <VscVerified/></div> 
                        <div className="profile-link">@Ramonaerts</div>
                        <div className="following">Following: <b>10.510</b> · Followers: <b>159k</b></div>
                    </div>
                </div>   
                <TweetModal/>             
            </div>
            <div className="middle">
                {this.props.match.params.user}
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