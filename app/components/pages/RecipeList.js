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
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title">{title}</h3>
                            </div>
                            <div className="panel-body">
                                <Recipes/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-md-offset-5">
                        <div className="btn-toolbar">
                            <div role="group" className="btn-group">
                                <button className="btn btn-success" type="button" onClick={this.createClick}>Create a Recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

