# React Redux Starter Kit 
Starter kit to bootstrap web application projects. It is based on
Facebook's [React](https://facebook.github.io/react/) library and
[Redux](http://gaearon.github.io/redux/index.html) framework
for [Flux](http://facebook.github.io/flux/) architecture. 
No server side part is included.

## Batteries included
* Setup for writing with es6/es7 style javascript.
* [ESLint](http://eslint.org) configuration integrated with react
  [plugin](https://github.com/yannickcr/eslint-plugin-react).
* [Webpack](http://webpack.github.io) module builder with hot loader and dev server.
  * server and client bundles
  * client bundle splits app code from vendor dependencies
  * webpack-dev-server
  * react-hot-loader
  * babel w/ babel-runtime
  * eslint-loader
  * pre-configured aliases and globals
* [React-hot-loader](http://gaearon.github.io/react-hot-loader/) for automated build on edit.
* React [router](https://github.com/rackt/react-router) for client side routing.
* [Karma](http://karma-runner.github.io) and [Jasmine](http://jasmine.github.io) for unit testing.
  * PhantomJS browser.
* [Redux](http://gaearon.github.io/redux/index.html) flux framework.
  * redux devtools (enabled with `--debug` flag)


# Usage
## Available tasks
#### `npm run dev`
Runs the webpack build system just like in `compile` but enables HMR and react
hot-loader. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:debug`
Same as `npm run dev` but enables `--debug` flag automatically.

#### `npm run dev:quiet`
Same as `npm run dev` but disables verbose debugging information.

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the
application to disk (`~/dist`).

#### `npm run test`
Runs all tests for the application. In development mode this will run in watch
mode and re-run individual test files when they change; in production mode a
failing test will fail your build.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests.

#### `npm run deploy`
Helper script to run tests and then, on success, compile your application.


## Configuration
Basic project configuration can be found in `~/config/index.js`. Here you'll be
able to redefine your src and dist directories, as well as tweak what ports
Webpack and WebpackDevServer run on. You'll also be able to configure what
packages webpack should treat as vendor dependencies.

### Webpack
As mentioned in features, the default Webpack configuration provides some
globals and aliases to make your life easier.

### Aliases
These can be used as such:

```js
import MyComponent from '../../components/my-component'; // without alias
import MyComponent from 'components/my-component'; // with alias

  // Available aliases:
  actions     => '~/src/actions'
  components  => '~/src/components'
  constants   => '~/src/constants'
  containers  => '~/src/containers'
  dispatchers => '~/src/dispatchers'
  layouts     => '~/src/layouts'
  models      => '~/src/models'
  reducers    => '~/src/reducers'
  routes      => '~/src/routes'
  services    => '~/src/services'
  stores      => '~/src/stores'
  styles      => '~/src/styles'
  views       => '~/src/views'
```

### Globals

#### `__DEV__`
True when `process.env.NODE_ENV` is `development`

#### `__PROD__`
True when `process.env.NODE_ENV` is `production`

#### `__DEBUG__`
True when the compiler is run with `--debug` (any environment).

#### `__CLIENT__`
True when the client bundler is running.

#### `__SERVER__`
True when the server bundler is running.

## Testing
To add a unit test, simply create `.spec.js` file anywhere in `~/src`. The
entry point for Karma uses webpack's custom require to load all these files,
and jasmine be available to you within your test without the
need to import them.

# Troubleshooting

### `--debug` isn't working
If you're using one of the pre-configured npm scripts, make sure you follow npm's syntax:

`npm run [command] [-- <args>]`

As an example, `npm run compile` would look like this:

`npm run compile -- --debug`

# TODO
----
* [ ] Nodemon or something for server


# Props
Thanks to [davezuko](https://github.com/davezuko), it is a modified version
of his [starter kit](https://github.com/davezuko/react-redux-starter-kit).
