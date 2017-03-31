/* ************************************************************************ */
/*
    
*/
import React from 'react';
import Recipes from './panels/Recipes.js';

const title = (<span><h2>Recipes</h2> <i>Click one to edit</i></span>);

export default class RecipeList extends React.Component {

    createClick() {
        console.log('create recipe click');
    }

    render() {
        return (
            <div id="RecipeList">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">{title}</h3>
                            </div>
                            <div className="panel-body">
                                <Recipes/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*

NOTE: Removed the button from below the panel row, but 
kept here in case it's desired again.

                <div className="row">
                    <div className="col-lg-1 col-lg-offset-5 col-md-1 col-md-offset-5 col-sm-1 col-sm-offset-5 col-xs-3 col-xs-offset-4">
                        <div className="btn-toolbar">
                            <div role="group" className="btn-group">
                                <button id="DoRecipeCreate" className="btn btn-success" type="button" onClick={this.createClick}>Create a Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>

*/