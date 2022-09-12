import React from 'react'
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { check_user } from '../lib/check_user'

export const Navigation = () => {

    const is_logged_in = check_user();
    if (is_logged_in === true) {
        return (
            <Nav variant="pills" className="Nav">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        )
    }else{
        return
    }
}
