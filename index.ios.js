/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './src/pages/IndexPage';
import { App } from 'autobots-framework';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// AppRegistry.registerComponent('FaceAcquisition', () => Home);
App.Register({ name: "FaceAcquisition", homeTitle: "", startApp: Home })
