/* ************************************************************************ */
/*
    Starting point for the REACT application (see /public/index.html)

    Include the Main React Dependencies

*/
import * as React from 'react';
import * as ReactDom from 'react-dom';

// React Routing
import { router } from './config/routes';

// where the magic happens....
const mountingPoint = document.getElementById('app');
ReactDom.render(router, mountingPoint);

