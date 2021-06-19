import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";
import TweetModal from "../../components/tweet-modal";
import Trending from "../../components/trending";
import ProfileOverview from "../../components/profile-overview";
import ProfileEditModal from "../../components/profile-edit-modal";
import FollowButton from "../../components/follow-button";
import TweetService from "../../services/api/tweetService";
import ProfileService from "../../services/api/profileService";
import FollowService from "../../services/api/followService";
import UserService from "../../services/api/userService";

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

    this.setState({ follows: follows, tweets: tweets, user: user, isLoading: false });

    window.addEventListener("delete-tweet", (e) => {
      this.deleteTweet(e.detail.tweetId);
    });

    window.addEventListener("new-tweet", (e) => {
      this.refreshTweets();
    });
  }

  async forgetUser(event){
    event.preventDefault();

    await UserService.ForgetUser();

    window.location.pathname = "/login";
  }

  deleteTweet(tweetId){
    var tweets = this.state.tweets;
    
    var newTweets = tweets.filter(function(e) { return e.id !== tweetId });

    this.setState({ tweets: newTweets });
  }

  async refreshTweets(){
    const tweets = await TweetService.GetProfileTweets(this.state.user.id);

    this.setState({ tweets: tweets });
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
                { user.self === true ?
                    <Form onSubmit={this.forgetUser}>
                      <Button className="forget-me-button" variant="danger" type="submit">Remove Profile</Button>
                    </Form>
                  :
                    <div></div>
                }

            </div>
            <div className="middle">  
            {
              tweets.length === 0 ?
                <div className="no-tweets-container">This user has not posted anything.</div>
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