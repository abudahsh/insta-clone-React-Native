import React from "react";
import { View, Image, Text, Button } from "react-native";

const ProfileInfoTop = () => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 5 }}>
      <View style={{ flex: 1, marginRight: 55 }}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 25 }}
          source={require("./../assets/bg1.jpg")}
        />
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>207</Text>
          <Text>670</Text>
          <Text>979</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Posts</Text>
          <Text>Followers</Text>
          <Text>Following</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button title="Message" onPress={() => null} />
          <Button title="Follow" onPress={() => null} />
          <Button title=">" onPress={() => null} />
        </View>
      </View>
    </View>
  );
};

export default ProfileInfoTop;
