import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../services/api/authService";
import UserService from "../../services/api/userService";
import {Redirect} from "react-router-dom";
import "./index.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  async login(event) {
    console.log("login");
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const result = await AuthService.Login(formDataObj);

    if(result.isSuccess == true) window.location.pathname = "/timeline";
  }

  async register(event) {
    console.log("register");
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const result = await UserService.Register(formDataObj);

    //if(result.isSuccess == true) window.location.pathname = "/timeline";
  }

  switchForm = () => {
    const { login } = this.state;

    if(login === true){
      this.setState({ login: false });
      return;
    }

    this.setState({ login: true });
  }

    render(){
      let { login } = this.state;
      
      return (
        <div className="auth">
          <div className="authContainer">
            {
              login === true ?
                <Form className="authform" onSubmit={this.login} id={"authform"}>
                  <h2>Login</h2>
                  <Form.Group>
                    <Form.Control name="email" type="email" placeholder="Email address" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control name="password" type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="authButton" type="submit">Log in</Button>
                  <Button className="authButton" onClick={this.switchForm} >Register</Button>  
                </Form>
              :
                <Form className="authform" onSubmit={this.register} id={"authform"}>
                  <h2>Register</h2>
                  <Form.Group>
                    <Form.Control name="username" type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control name="email" type="email" placeholder="Email address" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control name="password" type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control name="confirmpassword" type="password" placeholder="Confirm password" />
                  </Form.Group>
                  <Button className="authButton" type="submit">Register</Button>
                  <Button className="authButton" onClick={this.switchForm} >Log in</Button>  
                </Form>
            }
                
          </div>
        </div>
      );
    }
  }