import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationNode } from '../NavigationNode';
import { ForestView, useCommand } from '@vdimensions/forest-js-react';

export default ForestView("NavigationMenuNavigableItem", (navItem: NavigationNode) => {
    let text = navItem.title || navItem.path;
    let navigateCommand = useCommand("Navigate");
    var path = navigateCommand.path || navItem.path;
    return (
        <Nav.Item as="li">
            <Nav.Link 
                href={`/${path}`}
                onClick={(e : any) => { e.preventDefault(); navigateCommand && navigateCommand.invoke(null); return false; } }
                disabled={navItem.selected}
                >
                {text}
            </Nav.Link>
        </Nav.Item>
    );
});
