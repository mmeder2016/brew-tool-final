/* ************************************************************************ */
/*
    
*/
import React from 'react';

let idx = 0;

export default class Fermentable extends React.Component {

    onOzsChange(event){
        console.log('onOzsChange() - ' + event.target.value);
    }

    onLbsChange(event){
        console.log('onLbsChange() - ' + event.target.value);
    }

    onFmtNameChange(event){
        console.log('onFmtNameChange() - ' + event.target.value);
    }

    onDelClick() {
        console.log('onDelClick!');
    }

    render() {

        let fid = "fform-"+idx;
        let lbsid = "flbs-"+idx;
        let ozsid = "fozs-"+idx;
        let namid = "hnam-"+idx; 
        let btnid = "fdbtn-"+idx;
        idx += 1;

        return (
            <div id={fid} className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                    <input id={lbsid} className="form-control input-margins" type="text" placeholder="0" onChange={this.onLbsChange} />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">lbs</span></h4></div>
                <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-0 col-xs-3 col-xs-offset-2">
                    <input id={ozsid} className="form-control input-margins" type="text" placeholder="0" onChange={this.onOzsChange} />
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">oz</span></h4></div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <input id={namid} className="form-control input-margins" type="text" onChange={this.onFmtNameChange} />
                </div>
                <div className="col-lg-1 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-0 col-xs-6 col-xs-offset-4 input-margins">
                    <button id={btnid} className="btn btn-danger" type="button" onClick={this.onDelClick}>Delete</button>
                </div>
            </div>
        );
    }
}

