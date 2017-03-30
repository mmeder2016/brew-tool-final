// Include React
var React = require("react");

var Hop = React.createClass({

    deleteHop: function (event) {
        console.log('Hop deleteHop: function (event) {');
        this.props.deleteHop(this.props.id);
        event.preventDefault();
    },

    handleChange: function(event) {
        console.log('Hop handleChange: function(event) {');
        this.props.hopChange(this.props.id, event.target.id, event.target.value);
    },

    render: function() {
        console.log('Hop render: function () {');
        return (
            <div className="well">
                <form role="form">
                    <div className="form-group">
                        <label htmlFor="name">name:</label>
                        <input type="text" className="form-control" className="numberBox" id="name" value={this.props.name} onChange={this.handleChange} size='4'/>
                        <label htmlFor="lbs">lbs:</label>
                        <input type="text" className="form-control" className="numberBox" id="lbs" value={this.props.lbs} onChange={this.handleChange} size='4'/>
                        <label htmlFor="ozs">ozs:</label>
                        <input type="text" className="form-control" className="numberBox" id="ozs" value={this.props.ozs} onChange={this.handleChange} size='4'/>
                        <label htmlFor="minutes">minutes:</label>
                        <input type="text" className="form-control" className="numberBox" id="minutes"  value={this.props.minutes} onChange={this.handleChange} size='4'/>
                        <label htmlFor="alphaAcid">alphaAcid:</label>
                        <input type="text" className="form-control" className="numberBox" id="alphaAcid"  value={this.props.alphaAcid} onChange={this.handleChange} size='4'/>
                        <button data-id={this.props.id} onClick={this.deleteHop} className="delete-article" type="submit">Delete Hop</button>
                    </div>
                </form>

            </div>
        );
    }
});

module.exports = Hop;