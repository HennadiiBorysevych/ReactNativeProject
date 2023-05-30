import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "../styles/Registration";

const LoginScreen = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/bg.jpg")}
      >
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholder="Адреса електронної пошти"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
          <TextInput
            style={[styles.input, isPasswordFocused && styles.inputFocused]}
            placeholder="Пароль"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity>
            <Text style={styles.showPassword}>Показати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
