import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getOverlap} from '../actions';
import {bindActionCreators} from 'redux';


// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(reducers) {
    const state = reducers.ensemblReducer;
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
        actions: bindActionCreators({getOverlap}, dispatch)
    };
}

class Feature extends Component {
    displayName = 'display ensembl feature'
    componentDidMount() {
        const {loading, actions, params} = this.props;
        if (loading) {
            actions.getOverlap(params.id);
        }
    }
    render() {
        const {loading, response, error} = this.props;
        const {id} = this.props.params;
        let display;

        if (loading) {
            display = (
                <h3> Loading ensembl id {id} </h3>
            );
        } else if (error) {
            display = (
                <div>
                    <h2> Error !!!!! </h2>
                    <h3> {error}</h3>
                </div>
            );
        } else {
            display = (
                <ul>
                    {response.map((result) => {
                        return <li> id: {result.id} biotype: {result.biotype}</li>;
                    })}
                </ul>
            );
        }
        return display;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
