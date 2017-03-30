// Include React
var React = require("react");
var Fermentable = require ("./Fermentable");
var helper = require("./utils/helpers");

var FermentablesPanel = React.createClass({

    getInitialState: function() {
        console.log('FermentablesPanel getInitialState: function () {');
        return {
            fermentableList: []
        };
    },

    componentDidMount: function() {
        console.log('FermentablesPanel componentDidMount');
        helper.getFermentableList().then(function(res) {
            var obj = JSON.parse(res.data);
            this.setState({
                fermentableList: obj.data
            })
        }.bind(this));
    },

    addFermentable: function (data) {
        console.log('FermentablesPanel addNewFermentable : function () {');
        this.props.addNewFermentable('');
    },

    deleteFermentable: function(id){
        console.log('deleteFermentable: function(){');
        this.props.deleteFermentable(id);
    },

    fermentableChange: function(pid, tid, val) {
        console.log('fermentablesPanel fermentableChange : function () {');
        this.props.fermentableChange(pid, tid, val);
    },

    render: function() {
        console.log('FermentablesPanel render: function () {');
        
        var fermentableMap2 = this.state.fermentableList.map(function (litem) {
            return (<li key={litem.id}>{litem.name}</li>)
        })

        var parent = this;

        var fermentablesMap = [];
        if(Array.isArray(this.props.fermentables)) {
            fermentablesMap = this.props.fermentables.map(function (fermentable) {
                if(('removed' in fermentable) === false) {
                    return (<Fermentable key={fermentable._id} id={fermentable._id} name={fermentable.name} lbs={fermentable.lbs} ozs={fermentable.ozs} deleteFermentable={parent.deleteFermentable} fermentableChange={parent.fermentableChange}/>)
                }
            });
        }

        return ( 
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong>Fermentables</strong></h3>
                        </div>
                        <button onClick={this.addFermentable} className="add-fermentable" type="submit">Add New Fermentable</button>
                        <div className="panel-body" id="savedSection">
                            {fermentablesMap}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FermentablesPanel;