/* ************************************************************************ */
/*
    

value={this.state.today} 
*/
import React from 'react';

const titlePanel = (<h2 className="panel-title">Recipe Calculations</h2>);
const titleCalcs = (<h4 className="text-center">Calculated Values</h4>);

export default class Calculations extends React.Component {

    componentWillMount() {
        this.initializeState();
    }
    
    initializeState() {
        this.setState({
            today: new Date().toISOString(),
            recipeName: '',
            style: '',
            batchSize: '0.0'
        });
    }

    onBrewDateChange(event) {
        console.log('onBrewDateChange - '+event.target.value);
    }

    onStyleChange(event) {
        console.log('onStyleChange - '+event.target.value);
    }

    onBatchSzChange(event) {
        console.log('onBatchSzChange - '+event.target.value);
    }

    onNameChange(event) {
        console.log('onNameChange - '+event.target.value);
    }

    onSaveClick() {
        console.log('onSaveClick!');
    }

    onClearClick() {
        console.log('onClearClick!');
    }

    render() {
        return (
            <div className="panel panel-primary recipecalcs-margins" id="recipecalcs">
                <div className="panel-heading">
                    {titlePanel}
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="calcinput">
                            <form className="form-horizontal">

                                <div className="form-group" id="recipeName">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Recipe Name</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="Recipe Name" onChange={this.onNameChange} />
                                    </div>
                                </div>

                                <div className="form-group" id="brewDate">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Brew Date</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-7 calcinput-margins">
                                        <input className="form-control" type="date" onChange={this.onBrewDateChange} />
                                    </div>
                                </div>
                                <div className="form-group" id="style">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-2 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Style</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="Style" onChange={this.onStyleChange} />
                                    </div>
                                </div>
                                <div className="form-group" id="batchSize">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Batch Size</h4></div>
                                    <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="0.0" inputMode="numeric" onChange={this.onBatchSzChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-4 col-sm-3 col-sm-offset-2 col-xs-3 col-xs-offset-0">
                                        <button className="btn btn-success" type="button" onClick={this.onSaveClick}>Save</button>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xs-offset-2">
                                        <button className="btn btn-danger" type="button" onClick={this.onClearClick}>Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-6" id="calcvalues">
                            <div className="well well-sm">
                                <div className="row" id="calcvalheading">
                                    <div className="col-lg-12 col-lg-offset-0 col-md-12">
                                        {titleCalcs}
                                    </div>
                                </div>
                                <div className="row" id="calcval-og">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">O.G. </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="og-value">0.0000 </p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-fg">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">F.G. </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="fg-value">0.0000 </p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-ibu">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">IBU </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="ibu-value">0.0000 </p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-srm">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">SRM </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="srm-value">0.0000 </p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-abv">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">ABV </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="abv-value">0.0000 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}