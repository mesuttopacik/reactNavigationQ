/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/root/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import comfigureStore from "./src/redux/reducers/comfigureStore"

const store = comfigureStore();

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, () => Root);

