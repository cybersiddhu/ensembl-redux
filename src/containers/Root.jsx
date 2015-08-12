import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import App from './App';
import Feature from './Feature';
import * as store from 'stores';
import {DevTools, LogMonitor, DebugPanel} from 'redux-devtools/lib/react';

/* eslint-disable */
function renderDevTools() {
    if (__DEBUG__) {
        return (
            <DebugPanel top left
                bottom key="debugPanel">
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
      );
    }
}
/* eslint-enable */

export default class Root extends Component {
    displayName = 'Root component'
    render() {
        const {history} = this.props;
        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <Router history={history}>
                            <Route path="/" component={App}>
                                <Route path="ensembl/:id" component={Feature}/>
                            </Route>
                        </Router>}
                </Provider>
                {renderDevTools()}
            </div>
        );
    }
}

