import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import ProfileOverview from "../../components/profile-overview";
import TweetService from "../../services/api/tweetService";
import ProfileService from "../../services/api/profileService";
import { VscVerified } from "react-icons/vsc"

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      tweets: {},
      user: {},
      isLoading: true
    };
  }

  async componentDidMount(){    
    const user = await ProfileService.GetProfileByUsername(this.props.match.params.user);
    const tweets = await TweetService.GetOwnTweets();
    this.setState({ tweets: {}, tweets: tweets, user: user, isLoading: false });
  }
  
  render(){
    let { tweets } = this.state;
    let { user } = this.state;

    console.log(user);
  
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
                <ProfileOverview user={user}/>
                <TweetModal/>             
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