/* ************************************************************************ */
/*
    This portion contains the site header

{this.renderWelcome(this.state.curruser)}
{this.renderMenu(this.state.curruser)}


    initializeState() {
        // force to false for now, displays the
        // login / signup menu, but if set to
        // true then the log off menu is shown.
        this.setState({
            curruser: {status: false}
        });
    }

    componentWillMount() {
        this.initializeState();
    }


*/
import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <h5 className="navbar-brand navbar-left site-font">Site Name Here!</h5>
                </div>
                <div className="navbar-right navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to='test1' activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse" >Login</Link>
                        </li>
                        <li>
                            <Link to='test2' activeClassName='active' data-toggle="collapse" data-target=".navbar-collapse" >Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export { Header };

/*

    renderMenu(curruser) {
        if((curruser !== null) && (curruser.status === true)){
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to='test1' activeClassName='active' >Log Off</Link>
                    </li>
                </ul>
            )
        } else {
            return(
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to='test1' activeClassName='active' >Login</Link>
                    </li>
                    <li>
                        <Link to='test2' activeClassName='active' >Sign Up</Link>
                    </li>
                </ul>
            )
        }
    }


*/
