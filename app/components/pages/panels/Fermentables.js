/* ************************************************************************ */
/*
    
*/
import React from 'react';

import Fermentable from './Fermentable.js';


const titlePanel = (<h3 className="panel-title">Fermentables</h3>);

export default class Fermentables extends React.Component {

    addClick() {
        console.log('addClick()');
    }

    handleChange(){
        console.log('handleChange()');
    }

    onTestChange() {
        console.log('something CHANGED!');
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
                                        <select className="form-control" onChange={this.handleChange}>
                                            <option value="none">Select...</option>
                                            <option value="lager">lager</option>
                                            <option value="pilsner">pilsner</option>
                                            <option value="ipa">ipa</option>
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
}

