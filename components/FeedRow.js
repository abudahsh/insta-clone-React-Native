import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import PostActionBar from "./PostActionBar";
import { withNavigation } from "react-navigation";
class FeedRow extends React.Component {
  componentDidMount() {
    console.log("props: " + this.props.item);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
          style={{ flexDirection: "row", paddingBottom: 5, padding: 12 }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 15
            }}
            source={{ uri: this.props.item.profile_pic }}
          />

          <Text style={{ paddingLeft: 8 }}>{this.props.item.nick_name}</Text>
        </TouchableOpacity>
        <Image
          style={{ width: "100%", height: 400 }}
          source={{ uri: this.props.item.media }}
        />
        <Text>{this.props.item.body}</Text>
        <PostActionBar />
      </View>
    );
  }
}

export default withNavigation(FeedRow);
