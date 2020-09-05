import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='left-nav'>
                  <h1> Student Database</h1>
                </div>
                <div className = 'right-nav'>
                    <div>log-in</div>
                    <div>sign-up</div>
                    <div>log-out</div>
                </div>
            </div>
        );
    }
}

export default Navbar;