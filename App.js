import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createSwitchNavigator } from "react-navigation";
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
  /*
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  */
  render() {
    return <MainSwitch />;
  }
}
