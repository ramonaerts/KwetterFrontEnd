import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
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