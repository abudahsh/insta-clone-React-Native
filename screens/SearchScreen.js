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
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileFeedRow from "./../components/ProfileFeedRow";

fakePics = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "10" },
  { id: "11" },
  { id: "12" },
  { id: "27" },
  { id: "28" },
  { id: "26" },
  { id: "37" },
  { id: "38" },
  { id: "46" },
  { id: "47" },
  { id: "48" },
  { id: "36" },
  { id: "57" },
  { id: "58" },
  { id: "56" },
  { id: "57" },
  { id: "68" },
  { id: "66" },
  { id: "76" },
  { id: "85" }
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

class SearchScreen extends Component {
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
          <Image
            style={{ width: 100, height: 50, borderRadius: 7 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 100, height: 50, borderRadius: 7 }}
            source={require("./../assets/bg2.jpg")}
          />

          <Image
            style={{ width: 100, height: 50, borderRadius: 7 }}
            source={require("./../assets/bg2.jpg")}
          />
          <Image
            style={{ width: 100, height: 50, borderRadius: 7 }}
            source={require("./../assets/bg2.jpg")}
          />
        </View>
        <FlatList
          data={fakePics}
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

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
