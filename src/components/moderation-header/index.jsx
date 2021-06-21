import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./index.css";

export default class ModerationHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "pending",
            isLoading: true
        };
      }

    switchPending(){
        this.setState({ selected: "pending" });

        window.dispatchEvent(
            new CustomEvent("load-pending")
          );
    }

    switchApproved(){
        this.setState({ selected: "approved" });

        window.dispatchEvent(
            new CustomEvent("load-approved")
          );
    }

    switchUnapproved(){
        this.setState({ selected: "unapproved" });

        window.dispatchEvent(
            new CustomEvent("load-unapproved")
          );
    }

    render() {
        let { selected } = this.state;

        return (
            <div className="moderation-header-container">      
                { selected === "pending" ?            
                    <Button className="moderation-button-selected" type="submit">Pending</Button>
                :
                    <Button className="moderation-button" type="submit" onClick={() => this.switchPending()}>Pending</Button>
                }
                { selected === "approved" ?            
                    <Button className="moderation-button-selected" type="submit">Approved</Button>
                :
                    <Button className="moderation-button" type="submit" onClick={() => this.switchApproved()}>Approved</Button>
                }    
                { selected === "unapproved" ?            
                    <Button className="moderation-button-selected" type="submit">Unapproved</Button>
                :                    
                    <Button className="moderation-button" type="submit" onClick={() => this.switchUnapproved()}>Unapproved</Button>
                }                                    
            </div>
          );
    }
}