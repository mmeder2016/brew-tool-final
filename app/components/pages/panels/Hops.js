/* ************************************************************************ */
/*
    
*/
var React = require("react");

var Hop = require ("./Hop");
var helper  = require( '../../utils/helpers');


const titlePanel = (<h3 className="panel-title">Hops</h3>);

// NOTE: value can be a string or a number.
let selectChoices = [
                        {value:"none", text:"Select..."},
                        {value:"lager", text:"lager"},
                        {value:"pilsner", text:"pilsner"},
                        {value:"ipa", text:"ipa"}
                    ];

var Hops = React.createClass({

    addClick: function(event) {
        console.log('addClick()');
        console.log(event);
    },

    handleSelect: function(event){
        console.log('handleSelect() - ' + event.target.value);
    },

    renderSelectOptions: function(list) {
        let options = list.map(function(opt) {
            return <option key={opt.value} value={opt.alue}>{opt.text}</option>
        });
        return (options);
    },

    getInitialState: function() {
        console.log('Hops getInitialState: function () {');
        return {
            hopList: []
        };
    },

    render: function() {

        console.log('Hops render: function () {');

        var hopMap2 = this.state.hopList.map(function (litem) {
            return (<li key={litem.id}>{litem.name}</li>)
        });

        var parent = this;

        var hopsMap = [];
        // An error is thrown if the recipe is still undefined
        // if(Array.isArray(this.props.hops)) {
        //     hopsMap = this.props.hops.map(function (hop) {
        //         if(('removed' in hop) === false) {
        //             return (<Hop key={hop._id} id={hop._id} name={hop.name} lbs={hop.lbs} ozs={hop.ozs} minutes={hop.minutes} alphaAcid={hop.alphaAcid} deleteHop={parent.deleteHop} hopChange={parent.hopChange}/>)
        //         }
        //     });
        // }

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
                                        <select className="form-control" onChange={this.handleSelect}>
                                            {this.renderSelectOptions(selectChoices)}
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-lg-offset-2 col-md-3 col-sm-2 col-sm-offset-2 col-xs-3 col-xs-offset-2">
                                        <button className="btn btn-success" type="button" onClick={this.addClick}>Add</button>
                                    </div>
                                </div>
                                
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
            var obj = JSON.parse(res.data);
            this.setState({
                hopList: obj.data
            })
        }.bind(this));
    },

    addHop: function (data) {
        console.log('Hops addNewHop : function () {');
        this.props.addNewHop('');
    },

    deleteHop: function(id){
        console.log('deleteHop: function(){');
        this.props.deleteHop(id);
    },
    
    hopChange: function(objId, varName, val) {
        console.log('Hops hopChange : function () {');
        this.props.hopChange(objId, varName, val);
    }

});

module.exports = Hops;

