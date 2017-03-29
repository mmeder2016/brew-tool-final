/* ************************************************************************ */
/*
    
*/
import React from 'react';

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
                            <form>
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

                                {this.renderFermentable(0)}
                                {this.renderFermentable(1)}
                                {this.renderFermentable(2)}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderFermentable(idx)
    {
        let fid = "fform-"+idx;
        let lbsid = "lbs-"+idx;
        let ozsid = "ozs-"+idx;
        let fmntid = "fmnt-"+idx;
        let btnid = "dbtn-"+idx;

        return (
            <div id={fid} className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                    <input id={lbsid} className="form-control input-margins" type="text" placeholder="99" />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">lbs</span></h4></div>
                <div className="col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-0 col-xs-3 col-xs-offset-2">
                    <input id={ozsid} className="form-control input-margins" type="text" value="16" onChange={this.onTestChange} />
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 col-xs-1">
                    <h4 className="label-margins"><span className="label label-default">oz</span></h4></div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <input id={fmntid} className="form-control input-margins" type="text" value="Pilsner Malt (DE)" onChange={this.onTestChange} />
                </div>
                <div className="col-lg-1 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-0 col-xs-6 col-xs-offset-4 input-margins">
                    <button id={btnid} className="btn btn-danger" type="button" onClick={this.addClick}>Delete</button>
                </div>
            </div>
        );
    }
}

