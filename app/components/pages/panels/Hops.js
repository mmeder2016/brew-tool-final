/* ************************************************************************ */
/*
    
*/
import React from 'react';

const titlePanel = (<h3 className="panel-title">Hops</h3>);

export default className Hops extends React.Component {

    render() {
        return (
            <div className="panel panel-primary" id="hops">
                <div className="panel-heading">
                    {titlePanel}
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
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
                                <div className="form-group" id="hops-1">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" placeholder="99">
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                                        <h4 className="label-margins"><span className="label label-default">ozs </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="Pilsner Malt (DE)" id="a">
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="16" id="A">
                                    </div>
                                    <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                                        <h5 className="label-margins"><span className="label label-default">min </span></h5></div>
                                    <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                                        <button className="btn btn-danger" type="button">Delete </button>
                                    </div>
                                </div>
                                <div className="form-group" id="hops-2">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" placeholder="99">
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                                        <h4 className="label-margins"><span className="label label-default">ozs </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="Pilsner Malt (DE)" id="a">
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="16" id="A">
                                    </div>
                                    <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                                        <h5 className="label-margins"><span className="label label-default">min </span></h5></div>
                                    <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                                        <button className="btn btn-danger" type="button">Delete </button>
                                    </div>
                                </div>
                                <div className="form-group" id="hops-3">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" placeholder="99">
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 hop-input-col-padding">
                                        <h4 className="label-margins"><span className="label label-default">ozs </span></h4></div>
                                    <div className="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-1 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="Pilsner Malt (DE)" id="a">
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-1 col-sm-offset-0 col-xs-3 col-xs-offset-0 hop-input-col-padding">
                                        <input className="form-control input-margins" type="text" value="16" id="A">
                                    </div>
                                    <div className="col-lg-1 col-md-2 col-sm-1 col-sm-offset-0 col-xs-2">
                                        <h5 className="label-margins"><span className="label label-default">min </span></h5></div>
                                    <div className="col-lg-2 col-lg-offset-0 col-md-8 col-md-offset-4 col-sm-2 col-sm-offset-1 col-xs-4 col-xs-offset-3 input-margins">
                                        <button className="btn btn-danger" type="button">Delete </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <Panel header={titlePanel}  bsStyle="success">

                <Row className="show-grid">
                    <Col sm={12}>
                        <Form componentClass="fieldset" horizontal>
                        <div className="center-block">
                            <FormGroup controlId="hopsSelect">
                                <Col sm={10}>
                                    <FormControl componentClass="select" placeholder="Select" onChange={this.handleChange} >
                                        <option value="none">Select...</option>
                                        <option value="lager">Lager</option>
                                        <option value="pilsner">Pilsner</option>
                                        <option value="wiess">Wiess</option>
                                    </FormControl>
                                </Col>
                                <div className="col-sm-2 col-centered">
                                    <Button bsStyle="success" onClick={this.addClick}>Add</Button>
                                </div>
                            </FormGroup>
                        </div>
                        </Form>
                    </Col>
                </Row>
                <Row className="show-grid">
                    {this.renderHops(0)}
                </Row>
                <Row className="show-grid">
                    {this.renderHops(1)}
                </Row>
                <Row className="show-grid">
                    {this.renderHops(2)}
                </Row>
                <Row className="show-grid">
                    {this.renderHops(3)}
                </Row>


            </Panel>
        );
    }

    renderHops(idx)
    {
        let id = "hop-"+idx;

        return (





            <Form componentClass="fieldset" horizontal>
                <FormGroup controlId={id}>
                    <Col sm={1}/>
                    <Col sm={2}>
                        <FormControl type="text" placeholder="0" />
                    </Col>
                    <Col sm={1}>
                        <Label bsStyle="info">ozs</Label>
                    </Col>
                    <Col sm={2}>
                        <FormControl type="text" placeholder="0" />
                    </Col>
                    <Col sm={1}>
                        <Label bsStyle="info">min</Label>
                    </Col>
                    <Col sm={3}>
                        <FormControl type="text" placeholder="Hallertau (DE)" />
                    </Col>
                    <Col sm={2}>
                        <Button bsStyle="danger" onClick={this.addClick}>Del</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

