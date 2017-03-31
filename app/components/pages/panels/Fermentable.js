/* ************************************************************************ */
/*
    
*/
var React = require("react");

var Fermentable = React.createClass({

    render: function() {
        console.log('F - this.props._id');
        console.log(this.props._id);
        return (
            <div key={this.props._id} className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                    <input id="lbs" value={this.props.lbs} onChange={this.handleChange} className="form-control input-margins" type="text"/>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">lbs</span></h4>
                </div>

                <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-0 col-xs-3 col-xs-offset-2">
                    <input id="ozs" value={this.props.ozs} onChange={this.handleChange} className="form-control input-margins" type="text"/>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">ozs</span></h4>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-4">
                    <input id="name" value={this.props.name} onChange={this.handleChange} className="form-control input-margins" type="text"/>
                </div>

                <div className="col-lg-1 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-0 col-xs-6 col-xs-offset-4 input-margins">
                    <button className="btn btn-danger" type="button" onClick={this.deleteFermentable}>Delete</button>
                </div>
            </div>
        );
    },
    deleteFermentable: function (event) {
        console.log('Fermentable deleteFermentable: function (event) {');
        this.props.deleteFermentable(this.props.id);
        event.preventDefault();
    },
    handleChange: function(event) {
        console.log('Fermentable handleChange: function(event) {');
        this.props.fermentableChange(this.props.id, event.target.id, event.target.value);
    },
});

module.exports = Fermentable;


