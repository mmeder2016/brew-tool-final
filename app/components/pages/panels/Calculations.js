/* ************************************************************************ */
/*
    

value={this.state.today} 
*/
var React = require('react');

var titlePanel = (<h2 className="panel-title">Recipe Calculations</h2>);
var titleCalcs = (<h4 className="text-center">Calculated Values</h4>);

var Calculations = React.createClass({

    render: function () {
        this.doCalculations();

        return (
            <div className="panel panel-primary recipecalcs-margins" id="recipecalcs">
                <div className="panel-heading">
                    {titlePanel}
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="calcinput">
                            <form className="form-horizontal">

                                <div className="form-group">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Recipe Name</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="Recipe Name" id="recipeName" value={this.props.recipe.recipeName} onChange={this.handleChange}  />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Brew Date</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-7 calcinput-margins">
                                        <input className="form-control" type="date" id="brewDate" value={this.props.recipe.brewDate} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-2 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Style</h4></div>
                                    <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="Style" id="style" value={this.props.recipe.style} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5">
                                        <h4 className="text-center bg-primary calcs-input-label">Batch Size</h4></div>
                                    <div className="col-lg-3 col-lg-offset-1 col-md-3 col-md-offset-1 col-sm-7">
                                        <input className="form-control calcinput-margins" type="text" placeholder="0.0" inputMode="numeric" id="batchSize"  value={this.props.recipe.batchSize} onChange={this.handleChange} />
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
                                        <p className="form-control-static text-center static-border" id="og-value">{localStorage.getItem("OG")}</p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-fg">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">F.G. </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="fg-value">{localStorage.getItem("FG")}</p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-ibu">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">IBU </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="ibu-value">{localStorage.getItem("IBU")}</p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-srm">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">SRM </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="srm-value">{localStorage.getItem("SRM")}</p>
                                    </div>
                                </div>
                                <div className="row" id="calcval-abv">
                                    <div className="col-lg-3 col-lg-offset-2 col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">
                                        <h4 className="text-center"> <span className="label label-info">ABV </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-1 col-md-5 col-sm-5">
                                        <p className="form-control-static text-center static-border" id="abv-value">{localStorage.getItem("ABV")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    onSaveClick: function (){
        console.log('Calculations getSRM(){');
        this.props.saveRecipe();
    },


    getOG: function (){
        console.log('Calculations getOG  () {');
        var gallons = this.props.recipe.batchSize;

        var initpotential = 1.027; // from api
        var potential = (initpotential - 1) * 1000; // 1.027 -> 27
        var efficiency = .75; // always .75 for now
        var pts = 0;

        if(Array.isArray(this.props.recipe.fermentables )) {
            this.props.recipe.fermentables.forEach(function(element) {
                var ozlbs = (parseInt(element.ozs)) / 16;
                var lbs = parseInt(element.lbs);
                if(isNaN(ozlbs))
                    ozlbs = 0;
                if(isNaN(lbs))
                    lbs = 0;

                lbs += ozlbs
                var p = ((potential * lbs) );
                pts += p;
            });
        } else {
            console.log('fermentables array not array yet');
        }
        var og = 1 + (((pts * efficiency) / gallons) * .001);
        og = og.toFixed(3);
        console.log('OG: '+ og);
        return og;
    },

    getFG: function (og){
        console.log('Calculations getFG(og){');
        // yeast attenuation -depends yeast and on mashing technique .75 is close enough
        var attentuation = .75;
        var temp = 1 - attentuation; // .25
        var og = localStorage.getItem('OG');
        var fg = ( temp * (og - 1) ) + 1;
        console.log('temp:' + temp + ' og:' + og + ' fg:' + fg);
        fg = fg.toFixed(3);
        return fg;
    },

    getSRM: function (){
        console.log('Calculations getSRM(){');
        var srm = 0;
        srm = srm.toFixed(1);
        return srm;
    },

    getABV: function (og, fg){
        console.log('getABV(og, fg){');
        var og = localStorage.getItem('OG');
        var fg = localStorage.getItem('FG');
        var abv = (og - fg) * 131
        return abv.toFixed(1);
    },

    getIBU: function () {
        console.log('Calculations getIBU  () {');
        var totalIBU = 0;
        var volume = this.props.recipe.batchSize;
        
        if(Array.isArray(this.props.recipe.hops )) {
            this.props.recipe.hops.forEach(function(element) {
                var hoplbsozs = (parseInt(element.lbs, 10) * 16);
                var hopozs = parseInt(element.ozs, 10);
                if(isNaN(hoplbsozs))
                    hoplbsozs = 0;
                if(isNaN(hopozs))
                    hopozs = 0

                var oz = hoplbsozs + hopozs;
                var aa = parseFloat(element.alphaAcid, 10);
                aa.toFixed(1);
                var t = parseInt(element.minutes, 10);

                var pu = 0;
                if(t > 51) { pu = 30;} 
                else if (t >46) { pu = 28.1; } 
                else if (t > 41) { pu = 26.9; } 
                else if (t > 36) { pu = 22.8; } 
                else if (t > 31) { pu = 18.8; } 
                else if (t > 26){ pu = 15.3; } 
                else if (t > 21) { pu = 12.1; } 
                else if (t > 16) { pu = 10.1; } 
                else if (t > 11) { pu = 8; } 
                else if (t > 6){pu = 6; } 
                else  {pu = 5; }
                // (ounces) * (alpha acid) * (percent utilization)
                var ibu = ( (oz * aa * pu) / volume);
                console.log(element.name + ' IBU:' + ibu)
                totalIBU += ibu;
            });
        } else {
            console.log('hop array not array yet');
        }
        console.log('IBU: '+ totalIBU);
        totalIBU = totalIBU.toFixed(1);
        return totalIBU;
    },

    handleChange: function (event) {
        console.log('Calculations handleChange(event) {');
        this.props.calculationChange(event.target.id, event.target.value);
    },

    doCalculations: function (){
        console.log('Calculations doCalculations(){');
        localStorage.clear();
        localStorage.setItem("IBU", this.getIBU());
        localStorage.setItem("OG", this.getOG());
        localStorage.setItem("FG", this.getFG());
        localStorage.setItem("ABV", this.getABV());
        localStorage.setItem("SRM", this.getSRM());
    }
});

module.exports = Calculations;

