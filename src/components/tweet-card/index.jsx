import React, { Component } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt, AiOutlineRetweet } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import "./index.css";

export default class TweetCard extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        let { tweet } = this.props
        return (
            <div className="tweet-card-container">
                <div className="tweet-card-bar">
                    <div className="tweet-profile-container">
                        <div className="tweet-profile-image" style={{ backgroundImage: `url(https://localhost:50001/profile/images/${tweet.user.image})`}}/>
                        <div className="tweet-profile-names-container">
                            <div className="tweet-profile-name">{tweet.user.nickname}</div>
                            <div className="tweet-profile-link">@{tweet.user.username}</div>
                        </div>
                    </div>
                    <div className="date">
                        27-05-2021
                    </div>
                </div>
                <div className="tweet-content">
                    {tweet.tweetContent}
                </div>
                <div className="tweet-interaction">
                    <a className="icon"><FaRegComment/></a>                    
                    <a className="icon"><AiOutlineHeart/></a>    
                    <a className="icon"><AiOutlineRetweet/></a>     
                    <a className="icon"><AiOutlineShareAlt/></a>                                     
                </div>
            </div>
          );
    }
}