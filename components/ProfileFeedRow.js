import React from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";

picWidth = Dimensions.get("window").width / 3;
imageWidth = picWidth - 2;

class ProfileFeedRow  extends React.Component {
  componentDidMount(){
  	console.log('this props are' + this.props.media)
  }
  render(){
  	if (this.props.media){
  		return (
      <TouchableOpacity>
        <Image
          style={{ height: picWidth, width: imageWidth }}
          source={{ uri: this.props.media }}
        />
      </TouchableOpacity>
    );
  	}
  	return (
  		<Image  style={{ height: picWidth, width: imageWidth }}
          source={require('./../assets/bg2.jpg')} />
  		)
  }
    
  
  
};

export default ProfileFeedRow;
