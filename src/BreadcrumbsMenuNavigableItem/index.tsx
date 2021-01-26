import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { ForestView, useCommand } from '@vdimensions/forest-js-react';
import { NavigationNode } from '../NavigationNode';

export default ForestView("BreadcrumbsMenuNavigableItem", (navItem: NavigationNode) => {
    const text = navItem.title || navItem.path;
    let navigateCommand = useCommand("Navigate");
    var path = navigateCommand.path || navItem.path;
    return (
        <Breadcrumb.Item 
            href={`/${path}`}
            onClick={ (e: any) => { e.preventDefault(); navigateCommand && navigateCommand.invoke(null); } }
            >
            {text}
        </Breadcrumb.Item>
    );
});
