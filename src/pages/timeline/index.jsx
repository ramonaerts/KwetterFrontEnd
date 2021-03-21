import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap"
import "./index.css";
import Header from "../../components/header";

export default class Timeline extends Component {
    render(){
        return (
          <div>
            <Header pageName="Timeline" />
          </div>
        );
      }
}