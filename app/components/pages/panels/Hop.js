/* ************************************************************************ */
/*
    
*/
import React from 'react';

let idx = 0;

export default class Hop extends React.Component {

    onDelClick() {
        console.log('onDelClick!');
    }

    onOzsChange(event){
        console.log('onOzsChange() - ' + event.target.value);
    }

    onMinChange(event){
        console.log('onMinChange() - ' + event.target.value);
    }

    onHopNameChange(event){
        console.log('onHopNameChange() - ' + event.target.value);
    }

    render() {

        let hid = "hform-"+idx;
        let namid = "hnam-"+idx;
        let minid = "hmin-"+idx;
        let ozsid = "hozs-"+idx;
        let btnid = "hdbtn-"+idx;

        idx += 1;

        return (
            <div id={hid} className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                    <input id={ozsid} className="form-control input-margins" type="text" placeholder="0" onChange={this.onOzsChange}/>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                    <h4 className="label-margins"><span className="label label-default">ozs</span></h4></div>
                <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                    <input id={namid} className="form-control input-margins" type="text" placeholder="Enter a Hop" onChange={this.onHopNameChange}/>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                    <input id={minid} className="form-control input-margins" type="text" placeholder="0" onChange={this.onMinChange}/>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                    <h5 className="label-margins"><span className="label label-default">min</span></h5></div>
                <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                    <button id={btnid} className="btn btn-danger" type="button" onClick={this.onDelClick}>Delete</button>
                </div>
            </div>
        );
    }
}


