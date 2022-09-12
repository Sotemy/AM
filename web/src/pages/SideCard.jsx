import React from 'react';
import { Container } from "react-bootstrap";

import { HomeCard } from '../components/HomeCard';
import { Navigation } from '../components/Navigation';


export const SideCard = () => {
    return (
        <Container>
            <HomeCard />
            <Navigation />
        </Container>
    )
}
