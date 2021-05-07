import React, { Component } from "react";
import "./index.css";
import { VscVerified, VscEdit } from "react-icons/vsc"
import ImageEditModal from "../../components/image-edit-modal";

export default class ProfileOverview extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    let { user } = this.props;

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
                <div className="following">Following: <b>10.510</b> · Followers: <b>159k</b></div>
            </div>
        </div>   
      );
    }
}