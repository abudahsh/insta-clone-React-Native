import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class PostActionBar extends React.Component {
  state = {
    liked: false
  };
  likedClicked = () => {
    this.setState({ liked: this.state.liked ? false : true });
  };
  render() {
    let { liked } = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 10
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity onPress={this.likedClicked}>
            <Icon name={liked ? "heart" : "heart-o"} size={20} />
          </TouchableOpacity>

          <Icon name="comment-o" size={20} />
          <Icon name="send" size={20} />
        </View>
        <View style={{ flex: 2, alignItems: "flex-end" }}>
          <Icon name="bookmark-o" size={20} />
        </View>
      </View>
    );
  }
}

export default PostActionBar;
