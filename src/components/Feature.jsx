import React, {Component} from 'react';


export default class Feature extends Component {
    displayName = 'display ensembl feature'
    static contextTypes = {
        router: React.PropTypes.func.isRequired
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
                    <h3> {error.data.error}</h3>
            );
        } else {
            display = (
                <ul>
                    {
                        response.map((result) => {
                            <li>
                                source: {result.source}
                                id: {result.id}
                                biotype: {result.biotype}
                            </li>
                        })
                    }
                </ul>
            );
        }
        return display;
    }
}

