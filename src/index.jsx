import 'babel-core/polyfill';
import React from 'react';
import Root from './containers/Root';
import HashHistory from 'react-router/lib/HashHistory';

React.render(
    <Root history={new HashHistory()}/>,
        document.getElementById('container')
);
