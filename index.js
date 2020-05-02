/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/entry';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
