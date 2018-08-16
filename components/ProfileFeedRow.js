import React from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";

picWidth = Dimensions.get("window").width / 3;
imageWidth = picWidth - 2;

const ProfileFeedRow = props => {
  if (props.photos) {
    return (
      <TouchableOpacity>
        <Image
          style={{ height: picWidth, width: imageWidth }}
          source={{ uri: props.photos[2] }}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <Image
        style={{ height: picWidth, width: imageWidth }}
        source={require("./../assets/bg1.jpg")}
      />
    </TouchableOpacity>
  );
};

export default ProfileFeedRow;
