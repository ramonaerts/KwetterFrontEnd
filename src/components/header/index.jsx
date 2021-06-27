import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import RouterPaths from "../../services/route-paths";
import { getClaim } from "../../services/jwt";
import "./index.css";

export default class Header extends Component {
    render() {
      const Jwt = getClaim("role");
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={RouterPaths.Timeline}>Kwetter</Navbar.Brand>
            <input placeholder="Search..." type="text" className="search"/>
            <Nav className="mr-auto">
              <Nav.Link href={RouterPaths.Timeline}>Timeline</Nav.Link>
              <Nav.Link href={"/profile/" + localStorage.getItem("username")}>Profile</Nav.Link>
              {Jwt == "Moderator" && (
                <Nav.Link href={RouterPaths.Moderation}>Moderation</Nav.Link>
              )}
              <Nav.Link href={RouterPaths.Login}>Logout</Nav.Link>
            </Nav>
          </Navbar>
          );
    }
}