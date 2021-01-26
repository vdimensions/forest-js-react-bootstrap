import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationNode } from '../NavigationNode';
import { ForestView } from '@vdimensions/forest-js-react';

export default ForestView("NavigationMenuItem", (navItem: NavigationNode) => {
    let text = navItem.title || navItem.path;
    return (
        <Nav.Item as="li">
            <Nav.Link disabled={navItem.selected}>
                {text}
            </Nav.Link>
        </Nav.Item>
    );
});
