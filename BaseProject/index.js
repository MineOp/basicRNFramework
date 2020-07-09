/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {init} from '@rematch/core';
import * as models from './src/models';

const store = init({
  models,
  redux: {
    devtoolOptions: {},
  },
});

export default class AppWithAppearance extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppWithAppearance);
