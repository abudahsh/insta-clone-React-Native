import React from "react";
import { Camera, Permissions } from "expo";
import { Container, Content, Icon, Header, Button, Item } from "native-base";
import { StyleSheet, View, Text } from "react-native";
export default class CameraScreen extends React.Component {
  state = {
    hasCameraPerm: null,
    type: Camera.Constants.Type.back
  };

  _getCameraPerm = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPerm: status });
  };
  async componentDidMount() {
    this._getCameraPerm();
  }
  render() {
    const { hasCameraPerm } = this.state;
    if (hasCameraPerm === "granted") {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <Header
              style={{
                backgroundColor: "transparent",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Icon name="settings" style={{ color: "white" }} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 2,
                  justifyContent: "flex-end",
                  paddingRight: 10
                }}
              >
                <Icon name="ios-flash" style={{ color: "white" }} />
              </View>
            </Header>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                backgroundColor: "transparent"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 40,
                  marginLeft: 30,
                  marginRight: 30,
                  backgroundColor: "transparent"
                }}
              >
                <Icon name="md-square-outline" style={{ color: "white" }} />
                <Icon
                  name="ios-radio-button-on"
                  style={{ color: "white", fontSize: 70 }}
                />
                <Icon
                  name="md-sync"
                  style={{ color: "white" }}
                  onPress={() =>
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                    })
                  }
                />
              </View>
            </View>
          </Camera>
        </View>
      );
    }
    return (
      <View>
        <Text>No Camera Access</Text>
      </View>
    );
  }
}
