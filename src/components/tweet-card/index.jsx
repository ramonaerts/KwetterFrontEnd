import React, { Component } from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineRetweet } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import "./index.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        let { tweet } = this.props
        return (
            <div className="tweet-card-container">
                <div className="tweet-card-bar">
                    <div className="profile-container">
                        <div className="profile-image" style={{ backgroundImage: `url(/mgk.png)`}}/>
                        <div className="profile-names-container">
                            <div className="profile-name">{tweet.user.nickname}</div>
                            <div className="profile-link">@{tweet.user.username}</div>
                        </div>
                    </div>
                    <div className="date">
                        29-03-2021
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