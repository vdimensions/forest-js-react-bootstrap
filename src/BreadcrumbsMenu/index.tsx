import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Region, ForestView } from '@vdimensions/forest-js-react';

export default ForestView("BreadcrumbsMenu", () => {
    return (
        <Breadcrumb>
            <Region name="Items" />
        </Breadcrumb>
      );
});
