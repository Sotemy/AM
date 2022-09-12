import React from 'react'
import { Card } from "react-bootstrap"
import { check_user } from '../lib/check_user'

export const HomeCard = () => {

    const is_logged_in = check_user();
    if (is_logged_in === true) {
        return (
            <Card className="text-center">
                <Card.Header>AM</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad maiores magnam cumque, enim exercitationem cum quos unde itaque at, deserunt officiis odio numquam? Debitis modi culpa rerum aspernatur quis.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        )
    } else {
        return (
            <Card className="text-center">
                <Card.Header>AM</Card.Header>
                <Card.Body>
                    <Card.Title>Whose money should i count?</Card.Title>
                    <Card.Text>
                        Please, log in to access to your wallet-counter.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        )
    }

}
