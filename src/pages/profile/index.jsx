import React, { Component } from "react";
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import ProfileOverview from "../../components/profile-overview";
import ProfileEditModal from "../../components/profile-edit-modal";
import FollowButton from "../../components/follow-button";
import TweetService from "../../services/api/tweetService";
import ProfileService from "../../services/api/profileService";
import FollowService from "../../services/api/followService";

export default class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      tweets: {},
      user: {},
      follows: false,
      isLoading: true
    };
  }

  async componentDidMount(){    
    const user = await ProfileService.GetProfileByUsername(this.props.match.params.user);
    const tweets = await TweetService.GetProfileTweets(user.id);
    const follows = await FollowService.CheckIfFollows(user.id);
    this.setState({ follows: follows, tweets: {}, tweets: tweets, user: user, isLoading: false });
  }
  
  render(){
    let { tweets } = this.state;
    let { user } = this.state;
    let { follows } = this.state;
  
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
                { user.self === true ?
                    <ProfileEditModal user={user}/>
                  :
                    <FollowButton follows={follows} id={user.id}/>
                }
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