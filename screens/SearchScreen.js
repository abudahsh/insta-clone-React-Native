import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { fetchTweets } from "./../redux/actions";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileFeedRow from "./../components/ProfileFeedRow";

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

class SearchScreen extends Component {
   state = {
    tweets: []
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = (item, index) => <FeedRow {...item} />;
  componentDidMount() {
    this.props.getTweets(this.props.token);
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            height: 50,
            paddingTop: 20,
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth,
            height: 60
          }}
        >
          <View style={{ flex: 1 }}>
            <Icon name="search" size={25} />
          </View>
          <View style={{ flex: 9 }}>
            <TextInput
              placeholder="Search"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: 3,
            marginTop: 4
          }}
        >
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />

            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 100,
                height: 50,
                borderRadius: 7,
                marginRight: 10
              }}
              source={require("./../assets/bg2.jpg")}
            />
          </ScrollView>
        </View>
        <FlatList
          data={formatData(this.props.tweets, 3)}
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
)(SearchScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
