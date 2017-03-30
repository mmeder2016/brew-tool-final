/* ************************************************************************ */
/*
    
import Hops from './panels/Hops.js';
*/
/*
    saveClick() {
        console.log('saveClick() called');
    }

    clearClick() {
        console.log('clearClick() called');
    }

*/

import React from 'react';

import Calculations from './panels/Calculations.js';
import Fermentables from './panels/Fermentables.js';
import Hops from './panels/Hops.js';

export default class RecipeCreate extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                        <Calculations/>
                    </div>
                </div>
                <div className="row" id="ingredients-row">
                    <div className="col-lg-6 col-lg-offset-0 col-md-6">
                        <Fermentables/>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Hops/>
                    </div>
                </div>
            </div>
        );
    }
}

