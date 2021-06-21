import React, { Component } from "react";
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineRetweet, AiFillHeart } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"
import { FcCheckmark } from "react-icons/fc"
import { ImCancelCircle } from "react-icons/im"
import LikeService from "../../services/api/likeService";
import TweetService from "../../services/api/tweetService";
import { getClaim } from "../../services/jwt";
import "./index.css";

export default class TweetCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          likeCount: 0,
          mod: this.props.mod,
          liked: false
        };
      }

    async componentDidMount(){    
        await this.getLikes();

        window.addEventListener("refresh-likes", () => {
            this.getLikes();
          });
      }

    async likeTweet(tweetId){
        await LikeService.LikeTweet(tweetId);
        this.setState({ likeCount: this.state.likeCount + 1, liked: true});
    }

    async unlikeTweet(tweetId){
        await LikeService.UnlikeTweet(tweetId);
        this.setState({ likeCount: this.state.likeCount - 1, liked: false});
    }

    async getLikes(){
        const result = await LikeService.GetLikes(this.props.tweet.id);
        this.setState({ likeCount: result.likeCount, liked: result.liked });
    }

    async deleteTweet(tweetId){
        await TweetService.DeleteTweet(tweetId);

        window.dispatchEvent(
            new CustomEvent("delete-tweet", {
              bubbles: true,
              composed: true,
              detail: { tweetId: tweetId },
            })
          );
    }

    approveTweet(tweetId){
        window.dispatchEvent(
            new CustomEvent("approve-tweet", {
              bubbles: true,
              composed: true,
              detail: { tweetId: tweetId },
            })
        );
    }

    unapproveTweet(tweetId){
        window.dispatchEvent(
            new CustomEvent("unapprove-tweet", {
              bubbles: true,
              composed: true,
              detail: { tweetId: tweetId },
            })
          );
    }

    render() {
        let { tweet } = this.props;
        const { likeCount } = this.state;
        const { liked } = this.state;
        const { mod } = this.state;

        const Jwt = getClaim("role");

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
                {mod == false && (
                <div className="tweet-interaction">
                    <div className="icon"><FaRegComment/></div>
                    {
                        liked === true ?
                            <div className="liked-icon" onClick={() => this.unlikeTweet(tweet.id)}><AiFillHeart/> {likeCount}</div>
                        :
                            <div className="like-icon" onClick={() => this.likeTweet(tweet.id)}><AiOutlineHeart/> {likeCount}</div>
                    }                
                    <div className="icon"><AiOutlineRetweet/></div>
                    <div className="icon"><AiOutlineShareAlt/></div>
                    <div className="trash-icon" onClick={() => this.deleteTweet(tweet.id)}><BsTrash/></div>
                </div>
                )}
                {Jwt == "Moderator" && mod == true && (
                    <div className="tweet-interaction">              
                        <div className="icon" onClick={() => this.approveTweet(tweet.id)}><FcCheckmark/></div>
                        <div className="cancel-icon" onClick={() => this.unapproveTweet(tweet.id)}><ImCancelCircle/></div>
                    </div>
                )}
            </div>
          );
    }
}