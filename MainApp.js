import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Swiper from "react-native-swiper";
import SearchScreen from "./screens/SearchScreen";
import FeedScreen from "./screens/FeedScreen";
import CameraRollScreen from "./screens/CameraRollScreen";
import NotificationFeedScreen from "./screens/NotificationFeedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CameraScreen from "./screens/CameraScreen";
import Icon from "react-native-vector-icons/FontAwesome";
const FeedProfileStack = createStackNavigator(
  {
    Feed: FeedScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Feed",
    navigationOptions: {
      headerStyle: { height: 48 },
      headerLeft: (
        <View style={{ flexDirection: "row" }}>
          <Icon name="camera" size={25} style={{ marginRight: 10 }} />
          <Text style={{ fontWeight: "bold", fontSize: 21 }}>Instagram</Text>
        </View>
      ),
      headerRight: <Icon name="camera" size={25} style={{ marginRight: 20 }} />
    }
  }
);
const MainTabs = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="home" size={25} />
          ) : (
            <Icon name="home" color="gray" size={25} />
          )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="search" size={25} />
          ) : (
            <Icon name="search" color="gray" size={25} />
          )
      }
    },
    CameraRoll: {
      screen: CameraRollScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="plus" size={25} />
          ) : (
            <Icon name="plus" color="gray" size={25} />
          )
      }
    },
    NotificationFeed: {
      screen: NotificationFeedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="heart" size={25} />
          ) : (
            <Icon name="heart-o" color="gray" size={25} />
          )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name="user" size={25} />
          ) : (
            <Icon name="user" color="gray" size={25} />
          )
      }
    }
  },
  {
    initialRouteName: "Feed",
    tabBarOptions: {
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      showLabel: false,
      style: {
        height: 37,
        paddingVertical: 5,
        backgroundColor: "#fff"
      }
    }
  }
);
export default class MainApp extends Component {
  render() {
    return (
      <Swiper loop={false} showsPagination={false} index={1}>
        <View style={styles.container} />
        <MainTabs />
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  back: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
});
