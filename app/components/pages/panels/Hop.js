/* ************************************************************************ */
/*
    
*/
var React = require("react");

let idx = 0;

var Hop = React.createClass({

    render: function() {

        let hid = "hform-"+idx;
        let namid = "hnam-"+idx;
        let minid = "hmin-"+idx;
        let ozsid = "hozs-"+idx;
        let btnid = "hdbtn-"+idx;

        idx += 1;

        return (
            <div id={hid} className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                    <input id="ozs" value={this.props.ozs} onChange={this.handleChange} className="form-control input-margins" type="text"/>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                    <h4 className="label-margins"><span className="label label-default">ozs</span></h4>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                    <input id="alphaAcid" value={this.props.alphaAcid} onChange={this.handleChange} className="form-control input-margins" type="text"/>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                    <h4 className="label-margins"><span className="label label-default">aa</span></h4>
                </div>

                <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                    <input id="name" value={this.props.name} onChange={this.handleChange} className="form-control input-margins" type="text" placeholder="Enter a Hop"/>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                    <input id="minutes" value={this.props.minutes} onChange={this.handleChange} className="form-control input-margins" type="text" placeholder="0"/>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                    <h5 className="label-margins"><span className="label label-default">min</span></h5>
                </div>

                <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                    <button id={btnid} className="btn btn-danger" type="button" onClick={this.deleteHop}>Delete</button>
                </div>
            </div>
        );
    },

    deleteHop: function (event) {
        console.log('Hop deleteHop: function (event) {');
        this.props.deleteHop(this.props.id);
        event.preventDefault();
    },

    handleChange: function(event) {
        console.log('Hop handleChange: function(event) {');
        this.props.hopChange(this.props.id, event.target.id, event.target.value);
    }
});

module.exports = Hop;


