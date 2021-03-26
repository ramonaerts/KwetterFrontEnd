import React, { Component } from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineRetweet } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import "./index.css";

export default class Header extends Component {
    render() {
        return (
            <div className="tweet-card-container">
                <div className="tweet-card-bar">
                    <div className="profile-container">
                        <div className="profile-image" style={{ backgroundImage: `url(/logo512.png)`}}/>
                        <div className="profile-data">
                            <div className="profile-name">Ramon Aerts</div>
                            <div className="profile-link">@ramonaerts</div>
                        </div>
                    </div>
                    <div className="date">
                        26-03-2021
                    </div>
                </div>
                <div className="tweet-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="tweet-interaction">
                    <div className="icon"><FaRegComment/></div>                    
                    <div className="icon"><AiOutlineHeart/></div>   
                    <div className="icon"><AiOutlineRetweet/></div>     
                    <div className="icon"><AiOutlineShareAlt/></div>                                     
                </div>
            </div>
          );
    }
}