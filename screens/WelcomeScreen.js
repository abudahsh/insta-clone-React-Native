import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput
} from "react-native";

class WelcomeScreen extends React.Component {
  state = {
    fadein: new Animated.Value(0),
    fadebot: new Animated.Value(-30),
    loginFade: new Animated.Value(-300),
    registerFade: new Animated.Value(-300)
  };

  componentDidMount() {
    Animated.sequence([
      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(
          // Animate over time
          this.state.fadein, // The animated value to drive
          {
            toValue: 1, // Animate to opacity: 1 (opaque)
            duration: 2000 // Make it take a while
          }
        ),
        Animated.timing(
          this.state.fadebot, // The animated value to drive
          {
            toValue: 20, // Animate to opacity: 1 (opaque)
            duration: 1000 // Make it take a while
          }
        )
      ])
    ]).start();
  }
  signinClicked = () => {
    Animated.sequence([
      Animated.timing(this.state.registerFade, {
        toValue: -300,
        duration: 200
      }),
      Animated.timing(this.state.loginFade, {
        toValue: 40,
        duration: 1000
      })
    ]).start();
  };
  signupClicked = () => {
    Animated.sequence([
      Animated.timing(this.state.loginFade, {
        toValue: -300,
        duration: 200
      }),
      Animated.timing(this.state.registerFade, {
        toValue: 40,
        duration: 1000
      })
    ]).start();
  };
  handleSignin = () => {
    this.props.navigation.navigate("Main");
  };
  render() {
    let { fadein, fadebot, loginFade, registerFade } = this.state;
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={require("./../assets/giphy1.gif")}
      >
        <Animated.View
          style={{
            position: "absolute",
            bottom: fadebot,
            right: 20,
            left: 20,
            zIndex: 100,
            opacity: fadein
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8
            }}
            onPress={this.signinClicked}
          >
            <Text style={{ color: "white", fontSize: 26 }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.signupClicked}
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8
            }}
          >
            <Text style={{ color: "white", fontSize: 26 }}>Sign Up</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "white"
            }}
          >
            Already have something that i don't have?
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 200,
            left: loginFade,
            width: 300
          }}
        >
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: StyleSheet.hairlineWidth,
              marginBottom: 8
            }}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: StyleSheet.hairlineWidth,
              marginBottom: 8
            }}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.handleSignin}>
            <Text>Next</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 200,
            left: registerFade,
            width: 300
          }}
        >
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: StyleSheet.hairlineWidth,
              marginBottom: 8
            }}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: StyleSheet.hairlineWidth,
              marginBottom: 8
            }}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: StyleSheet.hairlineWidth,
              marginBottom: 8
            }}
            placeholder="Password"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.handleSignin}>
            <Text>Next</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;
