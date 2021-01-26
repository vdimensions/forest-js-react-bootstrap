import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavigationNode } from '../NavigationNode';
import { ForestView } from '@vdimensions/forest-js-react';

export default ForestView("BreadcrumbsMenuItem", (navItem: NavigationNode) => {
    let text = navItem.title || navItem.path;
    return ( 
        <Breadcrumb.Item active={navItem.selected}>
            {text}
        </Breadcrumb.Item>
    );
});
