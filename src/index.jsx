import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/App';
import * as store from './stores';

const elem = document.getElementById('container');
React.render(
    <Provider store={store}>
        {() => <App/>}
    </Provider>,
    elem
);
