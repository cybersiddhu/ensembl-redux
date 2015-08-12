import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';

class App extends Component {
    displayName = 'default app'
    render() {
        const {children} = this.props;
        return (
            <div>
                <h2> Ensembl Id information displayer </h2>
                <h3> Load /ensembl/ensembl_id in your browser</h3>
                {children}
            </div>
        );
    }
}

// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(state) {
    return {
        id: state.id,
        loading: state.loading,
        response: state.response,
        error: state.error
    };
}

// Which action creators does it want to receive by props
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
