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
import store from "./../redux/store";
import { connect } from "react-redux";
import { loginUser , registerUser} from "./../redux/actions";

class WelcomeScreen extends React.Component {
  state = {
    username: "dahsh",
    password: "killmemore",
    token: "",
    message: "",
    password1:'',
    password2:'',
    isAuthenticated: false,
    signinActive: false,
    registerActive: false,
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

  componentWillUpdate() {
    if (store.getState().userLogin.isAuthenticated) {
      this.props.navigation.navigate("Main", {
        creator: this.state.username
      });
    }
  }

  signinClicked = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.registerFade, {
          toValue: -300,
          duration: 200
        }),
        Animated.timing(this.state.fadebot, {
          toValue: 150,
          duration: 200
        })
      ]),

      Animated.timing(this.state.loginFade, {
        toValue: 40,
        duration: 500
      })
    ]).start();
    if (this.state.signinActive) {
      this.props.login(this.state.username, this.state.password);
    }
    this.setState({ signinActive: true, registerActive: false });
  };
  signupClicked = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.loginFade, {
          toValue: -300,
          duration: 200
        }),
        Animated.timing(this.state.fadebot, {
          toValue: 150,
          duration: 200
        })
      ]),
      Animated.timing(this.state.registerFade, {
        toValue: 40,
        duration: 500
      })
    ]).start();
    if (this.state.registerActive) {
      this.props.register(this.state.username, this.state.password1);
    }
    this.setState({ signinActive: false, registerActive: true });
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
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8
            }}
            onPress={this.signinClicked}
          >
            <Text style={{ color: "white", fontSize: 26 }}>
              {this.state.signinActive ? "Next" : "Sign In"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.signupClicked}
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8
            }}
          >
            <Text style={{ color: "white", fontSize: 26 }}>
              {this.state.registerActive ? "Next" : "Sign Up"}
            </Text>
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
              borderWidth: 1,
              marginBottom: 8,
              height: 40,
              color: "white",
              paddingHorizontal: 15,
              fontSize: 16
            }}
            placeholder="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: 1,
              marginBottom: 8,
              height: 40,
              color: "white",
              paddingHorizontal: 15,
              fontSize: 16
            }}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
          />
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
              borderWidth: 1,
              marginBottom: 8,
              height: 40,
              color: "white",
              paddingHorizontal: 15,
              fontSize: 16
            }}
            placeholder="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: 1,
              marginBottom: 8,
              height: 40,
              color: "white",
              paddingHorizontal: 15,
              fontSize: 16
            }}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password1 => this.setState({ password1 })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{
              borderColor: "white",
              borderRadius: 20,
              borderWidth: 1,
              marginBottom: 8,
              height: 40,
              color: "white",
              paddingHorizontal: 15,
              fontSize: 16
            }}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.password}
          onChangeText={password1 => this.setState({ password2 })}
            underlineColorAndroid="transparent"
          />
        </Animated.View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  //token: state.userLogin.token,
  message: state.userLogin.message,
  isAuthenticated: state.userLogin.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(loginUser(username, password)),
  register: (username, password) => dispatch(registerUser(username, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
  
