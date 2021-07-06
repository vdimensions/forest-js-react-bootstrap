import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavigationNode } from '../NavigationNode';
import { ForestView, useCommand } from '@vdimensions/forest-js-react';

export default ForestView("NavigationMenuNavigableItem", (navItem: NavigationNode) => {
    const navigateCommand = useCommand("Navigate");
    const href = navigateCommand.path ? `${navigateCommand.path}` : undefined;
    const text = navItem.title || navigateCommand.displayName;
    return (
        <Nav.Item as="li">
            <Nav.Link
                href={href}
                onClick={ (e : any) => { e.preventDefault(); navigateCommand && navigateCommand.invoke(null); return false; } }
                disabled={navItem.selected}
                >
                {text}
            </Nav.Link>
        </Nav.Item>
    );
});
