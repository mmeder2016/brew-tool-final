/* ************************************************************************ */
/*
    
*/
var React = require("react");
var Fermentable = require ("./Fermentable");
var helper = require("../../utils/helpers");


const titlePanel = (<h3 className="panel-title">Fermentables</h3>);

// NOTE: value can be a string or a number.
let selectChoices = [
                        {value:"none", text:"Select..."},
                        {value:"lager", text:"lager"},
                        {value:"pilsner", text:"pilsner"},
                        {value:"ipa", text:"ipa"}
                    ];

var FermentablesPanel = React.createClass({

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

    render: function() {
        console.log('FermentablesPanel render: function () {');
        
        var fermentableMap2 = this.state.fermentableList.map(function (litem) {
            return (<li key={litem.id}>{litem.name}</li>)
        })

        var parent = this;

        var fermentablesMap = [];
        // if(Array.isArray(this.props.fermentables)) {
        //     fermentablesMap = this.props.fermentables.map(function (fermentable) {
        //         if(('removed' in fermentable) === false) {
        //             return (<Fermentable key={fermentable._id} id={fermentable._id} name={fermentable.name} lbs={fermentable.lbs} ozs={fermentable.ozs} deleteFermentable={parent.deleteFermentable} fermentableChange={parent.fermentableChange}/>)
        //         }
        //     });
        // }

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
    }
});

module.exports = FermentablesPanel;

