import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <ImageBackground source={require("../assets/bg.jpg")} />
      <View>
        <Text>Увійти</Text>
        <TextInput placeholder="Адреса електронної пошти" />
        <TextInput />
        <Button>Увійти</Button>
        <Text>Немає акаунту? Зареєструватися</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
