import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { ForestView, useCommand } from '@vdimensions/forest-js-react';
import { NavigationNode } from '../NavigationNode';

export default ForestView("BreadcrumbsMenuNavigableItem", (navItem: NavigationNode) => {
    const navigateCommand = useCommand("Navigate");
    const href = navigateCommand.path ? `/${navigateCommand.path}` : undefined;
    const text = navItem.title || navigateCommand.displayName;
    return (
        <Breadcrumb.Item
            href={href}
            onClick={ (e: any) => { e.preventDefault(); navigateCommand && navigateCommand.invoke(null); } }
            active={navItem.selected}
            >
            {text}
        </Breadcrumb.Item>
    );
});
