/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console.disableYellowBox = true; // 关闭全部黄色警告
/* 关闭调试提示框 结束 */

AppRegistry.registerComponent(appName, () => App);
