import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../services/api/authService";
import {Redirect} from "react-router-dom";
import "./index.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  async login(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const result = await AuthService.Login(formDataObj);

    if(result.isSuccess == true) window.location.pathname = "/timeline";
  }

    render(){
      return (
        <div className="login">
          <div className="loginContainer">
            <Form className="loginform" onSubmit={this.login} id={"loginform"}>
              <h2>Login</h2>
              <Form.Group>
                <Form.Control name="email" type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group>
                <Form.Control name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Button className="loginButton" type="submit">Log in</Button>
            </Form>
          </div>
        </div>
      );
    }
  }