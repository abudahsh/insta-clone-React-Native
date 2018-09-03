import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView
} from "react-native";
import ProfileInfoTop from "./../components/ProfileInfoTop";
import ProfileFeedRow from "./../components/ProfileFeedRow";
import Icon from "react-native-vector-icons/FontAwesome";
import store from './../redux/store'
import { connect } from "react-redux";
import { fetchTweets } from "./../redux/actions";

fakeData = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" }
];
const formatData = (data, numColumns) => {
  const numOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsInLastRow = data.length - numOfFullRows * numColumns;
  while (
    numberOfElementsInLastRow !== numColumns &&
    numberOfElementsInLastRow !== 0
  ) {
    data.push({ id: `${numberOfElementsInLastRow}`, empty: true });
    numberOfElementsInLastRow = numberOfElementsInLastRow + 1;
  }
  return data;
};
 class ProfileScreen extends Component {
  state = { tweets: [] };

  static navigationOptions = {
    headerLeft: <View style={{ flexDirection: "row" }} />,
    headerRight: () => null
  };
 componentDidMount() {
    this.props.getTweets(this.props.token);
  }
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProfileInfoTop />

        <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
          <Text style={{ fontWeight: "bold" }}>Cristiano Ronaldo</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>Football Player</Text>
          <Text>Player of Juv and former RealMadrid player</Text>
          <Text>www.facebook.com/Ronaldo</Text>
        </View>

        <FlatList
          data={this.props.tweets}
          renderItem={({ item }) => {
            if (item.empty == true) {
              return (
                <View style={{ backgroundColor: "transparent", opacity: 0 }} />
              );
            }
            return (
              <View
                style={{
                  flexWrap: "wrap",
                  paddingVertical: 1,
                  paddingHorizontal: 1
                }}
              >
                <ProfileFeedRow {...item} />
              </View>
            );
          }}
          numColumns={3}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  token: state.userLogin.token,
  nickName: state.userLogin.nickName,
  profilePic: state.userLogin.profilePic,
  tweets: state.tweetFetch.tweets,
  isLoading: state.tweetFetch.isLoading
});

const mapDispatchToProps = dispatch => ({
  getTweets: token => dispatch(fetchTweets())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
