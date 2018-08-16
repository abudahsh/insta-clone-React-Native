import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import FeedRow from "./../components/FeedRow";
import { ScrollView } from "../node_modules/react-native-gesture-handler";
import config from "./../baseconfig";
import * as firebase from "firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
feedData = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" }
];
class FeedScreen extends Component {
  state = {
    items: []
  };
  _keyExtractor = (item, index) => item.id;
  _renderItem = (item, index) => <FeedRow {...item} />;
  itemsRef = firebase.database().ref("photos");
  componentDidMount() {
    this.itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
      console.log(this.state.items);
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
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
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("./../assets/bg2.jpg")}
          />
        </View>
        <FlatList
          data={this.state.items}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </ScrollView>
    );
  }
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
