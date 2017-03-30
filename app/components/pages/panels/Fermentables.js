/* ************************************************************************ */
/*
    
*/
import React from 'react';

import Fermentable from './Fermentable.js';


const titlePanel = (<h3 className="panel-title">Fermentables</h3>);

// NOTE: value can be a string or a number.
let selectChoices = [
                        {value:"none", text:"Select..."},
                        {value:"lager", text:"lager"},
                        {value:"pilsner", text:"pilsner"},
                        {value:"ipa", text:"ipa"}
                    ];

export default class Fermentables extends React.Component {

    addClick(event) {
        console.log('addClick()');
        console.log(event);
    }

    handleSelect(event){
        console.log('handleSelect() - ' + event.target.value);
    }

    render() {
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

                                <Fermentable />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSelectOptions(list) {
        let options = list.map(function(opt) {
            return <option key={opt.value} value={opt.alue}>{opt.text}</option>
        });
        return (options);
    }
}

