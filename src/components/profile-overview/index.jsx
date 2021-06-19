import React, { Component } from "react";
import "./index.css";
import { VscVerified } from "react-icons/vsc"
import ImageEditModal from "../../components/image-edit-modal";
import FollowService from "../../services/api/followService";

export default class ProfileOverview extends Component {
  constructor() {
    super()
    this.state = {
      followCounts: {},
      isLoading: true
    };
  }
  
  async componentDidMount(){    
    const followCounts = await FollowService.GetFollowCounts(this.props.user.id);
    console.log(followCounts);

    this.setState({ followCounts: followCounts, isLoading: false });

    window.addEventListener("follow-user", () => {
      this.addFollower();
    });

    window.addEventListener("unfollow-user", () => {
      this.removeFollower();
    });
  }

  addFollower(){
    let followCountsChange = this.state.followCounts;
    followCountsChange.followerCount = followCountsChange.followerCount + 1;
    
    this.setState({ followCounts: followCountsChange})
  }

  removeFollower(){
    let followCountsChange = this.state.followCounts;
    followCountsChange.followerCount = followCountsChange.followerCount - 1;

    this.setState({ followCounts: followCountsChange})
  }

  render(){
    let { user } = this.props;
    let { followCounts } = this.state;

      return (
        <div className="profile-container">
            <div className="profileimage" style={{ backgroundImage: `url(https://localhost:50001/profile/images/${user.image})`}}>
              {
                user.self === true ?
                  <ImageEditModal user={user}/>
                :
                  <div></div>
              }
            </div>
            <div className="profile-names-container">
                <div className="profile-name">{user.nickname} <VscVerified/></div> 
                <div className="profile-link">@{user.username}</div>
                <div className="following">Following: <b>{ followCounts.followingCount }</b> · Followers: <b>{ followCounts.followerCount }</b></div>
            </div>
        </div>   
      );
    }
}