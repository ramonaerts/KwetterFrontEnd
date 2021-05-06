import React, { Component } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap"
import "./index.css";

export default class FollowButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){

      return (
         <div>
             <Button className="follow-button">Follow</Button>
         </div>
      );
    }
}