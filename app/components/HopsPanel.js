// Include React
var React = require("react");
var Hop = require ("./Hop");
// var ReactDOM =require('react-dom');
var helper = require("./utils/helpers");

var HopsPanel = React.createClass({

    getInitialState: function() {
        console.log('HopsPanel getInitialState: function () {');
        return {
            hopList: []
        };
    },

    componentDidMount: function() {
        console.log('HopsPanel componentDidMount');
        helper.getHopList().then(function(res) {
            var obj = JSON.parse(res.data);
            this.setState({
                hopList: obj.data
            })
        }.bind(this));
    },

    addHop: function (data) {
        console.log('HopsPanel addNewHop : function () {');
        this.props.addNewHop('Tettnanger');
    },

    deleteHop: function(id){
        console.log('deleteHop: function(){');
        this.props.deleteHop(id);
    },
    
    hopChange: function(pid, tid, val) {
        console.log('HopsPanel hopChange : function () {');
        this.props.hopChange(pid, tid, val);
    },

    render: function() {
        console.log('HopsPanel render: function () {');

        var hopMap2 = this.state.hopList.map(function (litem) {
            return (<li key={litem.id}>{litem.name}</li>)
        });

        var parent = this;

        var hopsMap = [];
        // An error is thrown if the recipe is still undefined
        if(Array.isArray(this.props.hops)) {
            hopsMap = this.props.hops.map(function (hop) {
                return (<Hop key={hop._id} id={hop._id} name={hop.name} lbs={hop.lbs} ozs={hop.ozs} minutes={hop.minutes} alphaAcid={hop.alphaAcid} deleteHop={parent.deleteHop} hopChange={parent.hopChange}/>)
            });
        }

        return ( 
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong>Hops</strong></h3>
                        </div>
                        <button onClick={this.addHop} className="add-hop" type="submit">Add New Hop</button>

                        <div className="panel-body" id="savedSection">
                            {hopsMap}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = HopsPanel;

                        // <div className="dropdown">
                        //     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">ChooseHop
                        //     <span className="caret"></span></button>
                        //     <ul className="dropdown-hops">
                        //         {hopMap2}
                        //     </ul>
                        // </div>
