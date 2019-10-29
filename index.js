/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createAppContainer } from "react-navigation";
import {name as appName} from './app.json';
import page1 from "./page/page1";

import appNavigators from "./appNavigators";

// AppRegistry.registerComponent(appName, () => createAppContainer(appNavigators));
AppRegistry.registerComponent(appName, () => page1);
