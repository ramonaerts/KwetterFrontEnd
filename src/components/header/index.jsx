import React, { Component } from "react";
import { Nav, Navbar, FormControl } from "react-bootstrap";
import "./index.css";

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Kwetter</Navbar.Brand>
            <input placeholder="Search..." type="text" className="search"/>
            <Nav className="mr-auto">
              <Nav.Link href="#timeline">Timeline</Nav.Link>
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </Navbar>
          );
    }
}