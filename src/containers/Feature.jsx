import React, {Component} from 'react';


export default class Feature extends Component {
    displayName = 'display ensembl feature'
    static contextTypes = {
        router: React.PropTypes.func.isRequired
    }
    render() {
        const {loading, result, error} = this.props;
        const {router} = this.context;
        const {id} = this.props.params;
        let display;

        if (loading) {
            display = (
                <h3> Loading ensembl id {id} </h3>
            )
        } else if (error) {
            display = (
                <div>
                    <h2> Error !!!!! </h2>
            )
        }
        return (
            <p> called with router {this.props.params.id} </p>
        );
    }
}

