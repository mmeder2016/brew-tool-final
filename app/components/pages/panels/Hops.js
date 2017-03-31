/* ************************************************************************ */
/*
    
*/
var React = require("react");

var Hop = require ("./Hop");
var helper  = require( '../../utils/helpers');

const titlePanel = (<h3 className="panel-title">Hops</h3>);

/*
    When set to 'true' we will read previously retrieved and
    saved data. This insures that the allowed limit of API 
    calls to the data provider isn't exceeded.

    NOTE: This variable can also be found in the following
    files - 

    /data/brew.js
*/
var useLocalData = true;

var Hops = React.createClass({

    handleSelect: function(event){
        console.log('handleSelect() - ' + event.target.value);
    },

    renderSelectOptions: function(list) {
        let options = list.map(function(item) {
            return <option key={item.id} value={item.name}>{item.name}</option>
        });
        return (options);
    },

    getInitialState: function() {
        console.log('Hops getInitialState()');
        return {
            hopList: []
        };
    },

    render: function() {
        console.log('Hops render()');

        var parent = this;
        var hopsMap = [];
        // An error is thrown if the recipe is still undefined
        if(Array.isArray(this.props.hops)) {
            hopsMap = this.props.hops.map(function (hop) {
                if(('removed' in hop) === false) {
                    return (<Hop key={hop._id} id={hop._id} name={hop.name} lbs={hop.lbs} ozs={hop.ozs} minutes={hop.minutes} alphaAcid={hop.alphaAcid} deleteHop={parent.deleteHop} hopChange={parent.hopChange}/>)
                }
            });
        }
 
        return (
            <div className="panel panel-primary" id="hops">
                <div className="panel-heading">
                    {titlePanel}
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form-horizontal">
                                <div className="form-group" id="hops-select">
                                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                        <select id="hopSelect" ref="hopSelect" className="form-control" onChange={this.handleSelect}>
                                            {this.renderSelectOptions(this.state.hopList)}
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-lg-offset-2 col-md-3 col-sm-2 col-sm-offset-2 col-xs-3 col-xs-offset-2">
                                        <button className="btn btn-success" type="button" onClick={this.addHop}>Add</button>
                                    </div>
                                </div>
                                {hopsMap}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount: function() {
        console.log('Hops componentDidMount');
        helper.getHopList().then(function(res) {
            var obj;
            if(useLocalData === true) obj = res.data;
            else obj = JSON.parse(res.data);
            console.log(obj.data);
            this.setState({
                hopList: obj.data
            })
        }.bind(this));
    },

    addHop: function (data) {
        console.log('Hops addNewHop()');
        this.props.addNewHop(this.refs.hopSelect.value);
    },

    deleteHop: function(id){
        console.log('deleteHop()');
        this.props.deleteHop(id);
    },
    
    hopChange: function(objId, varName, val) {
        console.log('Hops hopChange : function () {');
        this.props.hopChange(objId, varName, val);
    }

});

module.exports = Hops;

