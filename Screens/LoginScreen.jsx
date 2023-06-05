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
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ route }) => {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordShown, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const LogIn = () => {
    if (!password || !email) {
      Alert.alert("Please, Enter password either email!", "", [{ text: "OK" }]);
      return;
    }
    Alert.alert("Welcome", `Your mail: ${email} is registred`, [
      { text: "OK" },
    ]);
    navigation.navigate("Home");
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
              secureTextEntry={isPasswordShown ? false : true}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!isPasswordShown)}>
              <Text style={styles.showPassword}>
                {isPasswordShown ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={LogIn}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                width: 342,
                backgroundColor: "#FF6C00",
                height: 50,
                marginBottom: 16,
                marginTop: 15,
              }}
            >
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
              style={styles.loginBtn}
            >
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
