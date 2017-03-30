/* ************************************************************************ */
/*
    
*/
import React from 'react';

import Hop from './Hop.js';


const titlePanel = (<h3 className="panel-title">Hops</h3>);

export default class Hops extends React.Component {

    onTestChange() {
        console.log('something CHANGED!');
    }

    render() {
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
                                        <select className="form-control">
                                            <option value="none">Select...</option>
                                            <option value="lager">lager</option>
                                            <option value="pilsner">pilsner</option>
                                            <option value="ipa">ipa</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-lg-offset-2 col-md-3 col-sm-2 col-sm-offset-2 col-xs-3 col-xs-offset-2">
                                        <button className="btn btn-success" type="button">Add </button>
                                    </div>
                                </div>

                                <Hop />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

