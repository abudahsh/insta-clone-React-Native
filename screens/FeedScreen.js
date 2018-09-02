import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import FeedRow from "./../components/FeedRow";
import { fetchTweets } from "./../redux/actions";
import store from "./../redux/store";



class FeedScreen extends Component {
  state = {
    items: []
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = (item, index) => <FeedRow {...item} />;
  componentDidMount() {
    this.props.getTweets(this.props.token);
  }
  render() {
    return (
      <ScrollView style={styles.container} alwaysBounceVertical={true} refreshing={true}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 3,
            marginTop: 4
          }}
        >
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 7
              }}
              source={require("./../assets/bg2.jpg")}
            />
          </ScrollView>
        </View>
        <FlatList
          data={this.props.tweets}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
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
)(FeedScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
