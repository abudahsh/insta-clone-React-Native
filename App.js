import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import WelcomeScreen from "./screens/WelcomeScreen";

import MainApp from "./MainApp";

const MainSwitch = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Main: MainApp
  },
  {
    initialRouteName: "Welcome"
  }
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainSwitch />
      </Provider>
    );
  }
}

