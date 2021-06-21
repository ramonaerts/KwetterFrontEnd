import React, { Component } from "react";
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import Trending from "../../components/trending";
import ModerationHeader from "../../components/moderation-header";
import ModerationService from "../../services/api/moderationService";

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      tweets: {},
      isLoading: true
    };
  }

  async componentDidMount(){    
    await this.getPendingTweets();

    window.addEventListener("load-pending", () => {
      this.getPendingTweets();
    });

    window.addEventListener("load-approved", () => {
      this.getApprovedTweets();
    });

    window.addEventListener("load-unapproved", () => {
      this.getUnapprovedTweets();
    });

    window.addEventListener("approve-tweet", (e) => {
      this.approveTweet(e.detail.tweetId);
    });

    window.addEventListener("unapprove-tweet", (e) => {
      this.unapproveTweet(e.detail.tweetId);
    });
  }

  async getPendingTweets(){
    const tweets = await ModerationService.GetPendingTweets();
    this.setState({ tweets: tweets, isLoading: false });
  }

  async getApprovedTweets(){
    const tweets = await ModerationService.GetApprovedTweets();
    this.setState({ tweets: tweets, isLoading: false });
  }

  async getUnapprovedTweets(){
    const tweets = await ModerationService.GetUnapprovedTweets();
    this.setState({ tweets: tweets, isLoading: false });
  }

  async approveTweet(tweetId){
    await ModerationService.ApproveTweet(tweetId);
    this.getPendingTweets();
  }

  async unapproveTweet(tweetId){
    await ModerationService.UnapproveTweet(tweetId);
    this.getPendingTweets();
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
            <Header pageName="Moderation" />
          </div>   
          <div className="timeline-container">         
            <div className="left">
              <TweetModal/>
            </div>
            <div className="middle">
            <ModerationHeader/>
            {
              tweets.length === 0 ?
                <div className="no-tweets-container">There currently are no tweets that need checking.</div>
              :
              <div>                
                {tweets.map((tweet) => (
                  <TweetCard tweet={tweet} mod={true}/>
                ))}
              </div>
            }  
            </div>
            <div className="right">
              <Trending/>
            </div>
          </div>
        </div>
      );
    }
}