import React, { Component } from "react";
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import Trending from "../../components/trending";
import TimelineService from "../../services/api/timelineService";

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
    const tweets = await TimelineService.GetTimelineTweets();
    this.setState({ tweets: tweets, isLoading: false });
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
            {
              tweets.length === 0 ?
                <div className="no-tweets-container">Start following some people to see their tweets on this page.</div>
              :
              <div>
                {tweets.map((tweet) => (
                  <TweetCard tweet={tweet}/>
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