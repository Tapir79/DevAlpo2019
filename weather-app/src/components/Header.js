import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import {shouldGoForCoffee} from '../utils/utilFunctions';

class Header extends Component {

    render() {
        return <AppBar color='primary' position='static'>
            <Toolbar>
                <TypoGraphy variant='h6'
                    color='inherit'>
                    <div>
                        <h1>Sää Tampereella on: {this.props.weather} astetta</h1>
                        <h2> {shouldGoForCoffee(this.props.weather)} </h2>
                    </div>

                </TypoGraphy>
            </Toolbar>

        </AppBar>
    }
}

export default Header;