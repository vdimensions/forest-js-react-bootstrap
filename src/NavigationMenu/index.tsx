import React from 'react';
import { Nav } from 'react-bootstrap';
import { ForestView, Region } from '@vdimensions/forest-js-react';

export default ForestView("NavigationMenu", () => {
    return (
        <Nav as="ul">
            <Region name="Items" />
        </Nav>
    );
});
