/* ************************************************************************ */
/*
    
*/
var React = require("react");
var Fermentable = require ("./Fermentable");
var helper = require("../../utils/helpers");


const titlePanel = (<h3 className="panel-title">Fermentables</h3>);

/*
    When set to 'true' we will read previously retrieved and
    saved data. This insures that the allowed limit of API 
    calls to the data provider isn't exceeded.

    NOTE: This variable can also be found in the following
    files - 

    /data/brew.js
*/
var useLocalData = true;

var Fermentables = React.createClass({

    handleSelect: function(event){
        console.log('handleSelect() - ' + event.target.value);
    },

    renderSelectOptions: function(list) {
        let options = list.map(function(item) {
            return <option key={item.id} value={item.name}>{item.name}</option>
        });
        return (options);
    },

    render: function() {
        console.log('Fermentables render()');

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
            <div className="panel panel-primary" id="fermentables">
                <div className="panel-heading">
                    {titlePanel}
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-horizontal">
                                <div className="form-group" id="ferment-select">
                                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                        <select className="form-control" onChange={this.handleSelect}>
                                            {this.renderSelectOptions(this.state.fermentableList)}
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-lg-offset-2 col-md-3 col-sm-2 col-sm-offset-2 col-xs-3 col-xs-offset-2">
                                        <button className="btn btn-success" type="button" onClick={this.addFermentable}>Add</button>
                                    </div>
                                </div>
                                {fermentablesMap}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    getInitialState: function() {
        console.log('Fermentables getInitialState()');
        return {
            fermentableList: []
        };
    },

    componentDidMount: function() {
        console.log('Fermentables componentDidMount');
        helper.getFermentableList().then(function(res) {
            var obj;
            if(useLocalData === true) obj = res.data;
            else obj = JSON.parse(res.data);
            console.log(obj.data);
            this.setState({
                fermentableList: obj.data
            })
        }.bind(this));
    },

    addFermentable: function (data) {
        console.log('Fermentables addFermentable');
        this.props.addNewFermentable('');
    },

    deleteFermentable: function(id){
        console.log('Fermentables deleteFermentable()');
        this.props.deleteFermentable(id);
    },

    fermentableChange: function(pid, tid, val) {
        console.log('Fermentables fermentableChange()');
        this.props.fermentableChange(pid, tid, val);
    }
});

module.exports = Fermentables;

