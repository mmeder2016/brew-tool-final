/* ************************************************************************ */
/*
    Main React Container - 

        
*/
import * as React from 'react';

import { Header } from './pages/parts/siteheader.js';
import { Footer } from './pages/parts/sitefooter.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container site-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export { Main };
