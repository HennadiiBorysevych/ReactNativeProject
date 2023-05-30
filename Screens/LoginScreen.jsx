import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { styles } from "../styles/Registration";

const LoginScreen = () => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const LogIn = () => {
    Alert.alert({ password, email });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        number="5"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={styles.image}
          source={require("../assets/bg.jpg")}
        >
          <View style={styles.formWrapper}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholder="Пароль"
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <TouchableOpacity>
              <Text style={styles.showPassword}>Показати</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={LogIn} style={styles.button}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
