import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';


class Header extends Component {

    render() {
        return <AppBar color='primary' position='static'>
            <Toolbar>
                <TypoGraphy variant='title'
                    color='inherit'>                      
                   <h1>Sää Tampereella on: {this.props.weather}</h1> 
                </TypoGraphy>
            </Toolbar>

        </AppBar>
    }
}

export default Header;