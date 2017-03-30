/* ************************************************************************ */
/*
    
*/
import React from 'react';

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

                                {this.renderHops(0)}
                                {this.renderHops(1)}
                                {this.renderHops(2)}
                                {this.renderHops(3)}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderHops(idx)
    {
        let hopid = "hop-"+idx;

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

