// Include React
var React = require("react");

var CalculationsPanel = React.createClass({

    getOG: function(){
        console.log('CalculationsPanel getOG : function () {');
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
    getFG: function(og){
        console.log('CalculationsPanel getFG: function(og){');
        // yeast attenuation -depends yeast and on mashing technique .75 is close enough
        var attentuation = .75;
        var temp = 1 - attentuation; // .25
        var og = localStorage.getItem('OG');
        var fg = ( temp * (og - 1) ) + 1;
        console.log('temp:' + temp + ' og:' + og + ' fg:' + fg);
        fg = fg.toFixed(3);
        return fg;
    },
    getSRM: function(){
        console.log('CalculationsPanel getSRM: function(){');
        var srm = 0;
        srm = srm.toFixed(1);
        return srm;
    },
    getABV: function(og, fg){
        console.log('getABV: function(og, fg){');
        var og = localStorage.getItem('OG');
        var fg = localStorage.getItem('FG');
        var abv = (og - fg) * 131
        return abv.toFixed(1);
    },

    getIBU: function() {
        console.log('CalculationsPanel getIBU : function () {');
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
                console.log('oz:' + oz);
                console.log('aa:'+ aa);
                console.log('pu:' + pu)
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

    handleChange: function(event) {
        console.log('CalculationsPanel handleChange: function(event) {');
        this.props.calculationChange(event.target.id, event.target.value);
    },

    doCalculations: function(){
        console.log('CalculationsPanel doCalculations: function(){');
        localStorage.clear();
        localStorage.setItem("IBU", this.getIBU());
        localStorage.setItem("OG", this.getOG());
        localStorage.setItem("FG", this.getFG());
        localStorage.setItem("ABV", this.getABV());
        localStorage.setItem("SRM", this.getSRM());
    },

    render: function() {
        console.log('CalculationsPanel render: function () {');
        this.doCalculations();

        return ( 
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong>Calculations</strong></h3>
                        </div>
                        <div className="panel-body" id="savedSection">
                            <form role="form">
                                <div className="form-group">
                                    <label htmlFor="recipeName">recipeName:</label>
                                    <input type="text" className="form-control" className="numberBox" id="recipeName" value={this.props.recipe.recipeName} onChange={this.handleChange} size='20'/>
                                    <label htmlFor="style">style:</label>
                                    <input type="text" className="form-control" className="numberBox" id="style" value={this.props.recipe.style} onChange={this.handleChange} size='20'/>
                                    <label htmlFor="brewDate">brewDate:</label>
                                    <input type="text" className="form-control" className="numberBox" id="brewDate" value={this.props.recipe.brewDate} onChange={this.handleChange} size='16'/>
                                    <label htmlFor="batchSize">batchSize:</label>
                                    <input type="text" className="form-control" className="numberBox" id="batchSize"  value={this.props.recipe.batchSize} onChange={this.handleChange} size='4'/>
                                    <label htmlFor="recipeName">ObjectID: {this.props.recipe._id}</label>
                                </div>
                            </form>
                        </div>


                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"><strong>Calculations</strong></h3>
                            </div>
                            <div className="panel-body" id="savedSection">
                                IBU:{localStorage.getItem("IBU")} OG:{localStorage.getItem("OG")} FG:{localStorage.getItem("FG")} SRM:{localStorage.getItem("SRM")} ABV:{localStorage.getItem("ABV")}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CalculationsPanel;