import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";
import TweetCard from "../../components/tweet-card";

export default class Timeline extends Component {
    render(){
        return (
          <div>
            <div className="header">
              <Header pageName="Timeline" />
            </div>   
            <div className="timeline-container">         
              <div className="left">

              </div>
              <div className="middle">
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
                <TweetCard/>
              </div>
              <div className="right">

              </div>
            </div>
          </div>
        );
      }
}