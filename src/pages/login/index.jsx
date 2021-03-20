import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../services/api/authService";
import "./index.css";

export default class Login extends Component {
  async login(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const result = await AuthService.Login(formDataObj);

    console.log(result);
  }

    render(){
      return (
        <div className="loginContainer">
          <Form className="loginform" onSubmit={this.login} id={"loginform"}>
            <h2>Login</h2>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button className="loginButton" type="submit">Log in</Button>
          </Form>
        </div>
      );
    }
  }