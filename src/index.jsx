import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/App';
import * as store from './stores';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';

function renderDevTools() {
    if (__DEBUG__) {
      return (
        <DebugPanel top left bottom key='debugPanel'>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }
}

const elem = document.getElementById('container');
React.render(
    <div>
        <Provider store={store}>
            {() => <App/>}
        </Provider>
        {renderDevTools()}
    </div>,
    elem
);
