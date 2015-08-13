import React, {Component} from 'react';

export default class App extends Component {
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

