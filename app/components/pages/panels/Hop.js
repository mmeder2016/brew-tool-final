/* ************************************************************************ */
/*
    
*/
import React from 'react';

let idx = 0;

export default class Hop extends React.Component {

    onTestChange() {
        console.log('HOP CHANGED!');
    }

    render() {

        let hopid = "hop-"+idx;
        idx += 1;

        return (
            <div className="form-group" id={hopid}>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                    <input className="form-control input-margins" type="text" placeholder="99" />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                    <h4 className="label-margins"><span className="label label-default">ozs </span></h4></div>
                <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                    <input className="form-control input-margins" type="text" value="Pilsner Malt (DE)" id="a"  onChange={this.onTestChange}/>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                    <input className="form-control input-margins" type="text" value="16" id="A"  onChange={this.onTestChange}/>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                    <h5 className="label-margins"><span className="label label-default">min </span></h5></div>
                <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                    <button className="btn btn-danger" type="button">Delete </button>
                </div>
            </div>
        );
    }
}


