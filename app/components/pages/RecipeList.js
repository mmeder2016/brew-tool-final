/* ************************************************************************ */
/*
    
*/
var React  = require('react');
var Recipes = require('./panels/Recipes.js');
var helper  = require('../utils/helpers');

const title = (<span><h2>Recipes</h2> <i>Click one to edit</i></span>);

var RecipeList = React.createClass({
    getInitialState: function() {
        console.log('Main getInitialState: function () {');
        return {
            userRecipes: {}
        };
    },

    // Runs before render
    componentDidMount: function(){
        console.log('componentDidMount: function(){');
        helper.getUserRecipeList().then(function(response) {
            //console.log(JSON.stringify(response.data));
            this.setState({
                userRecipes: response.data
            });
        }.bind(this));
    },

    createClick: function() {
        console.log('create recipe click');
    },


    render: function() {
        console.log('RecipeList RENDER')
        return (
            <div id="RecipeList">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">{title}</h3>
                            </div>
                            <div className="panel-body">
                                <Recipes userRecipes={this.state.userRecipes}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RecipeList;

