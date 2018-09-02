import React from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";

picWidth = Dimensions.get("window").width / 3;
imageWidth = picWidth - 2;

const ProfileFeedRow = props => {
  
    return (
      <TouchableOpacity>
        <Image
          style={{ height: picWidth, width: imageWidth }}
          source={{ uri: props.media }}
        />
      </TouchableOpacity>
    );
  
  
};

export default ProfileFeedRow;
