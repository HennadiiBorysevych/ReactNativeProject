import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground source={require("../assets/bg.jpg")} />
      <View>
        <Text>Реєстрація</Text>
        <TextInput placeholder="Логін" />
        <TextInput placeholder="Адреса електронної пошти" />
        <TextInput placeholder="Пароль" />
        <Button>Зареєструватися</Button>
        <Text>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
};

export default RegistrationScreen;
