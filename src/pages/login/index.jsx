import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap"
import "./index.css";

export default class Login extends Component {
    render(){
      return (
        <div className="loginContainer">
          <Form className="loginform">
            <h3>Login</h3>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="loginButton" type="submit">Log in</Button>
          </Form>
        </div>
      );
    }
  }