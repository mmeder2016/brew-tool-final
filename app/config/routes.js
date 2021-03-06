/* ************************************************************************ */
/*
    React Routes - 

        
*/
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from '../components/Main';
import RecipeList from '../components/pages/RecipeList.js';
import RecipeCreate from '../components/pages/RecipeCreate.js';

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
        <Route path='create' component={RecipeCreate} />
        <Route path='list' component={RecipeList} />
        <IndexRoute component={RecipeList} />
        </Route>
    </Router>
);

export { router };
