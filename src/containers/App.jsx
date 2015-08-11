import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';

class App extends Component {
    render() {

    }
}

// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(state) {
    return {

    }
}

// Which action creators does it want to receive by props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
