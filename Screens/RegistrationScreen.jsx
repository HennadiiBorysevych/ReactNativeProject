import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/Registration";

const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginName, setLoginName] = useState("");
  const [isPasswordShown, setShowPassword] = useState(false);

  const SingUp = () => {
    Alert.alert({ password, email, loginName });
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={styles.image}
          source={require("../assets/bg.jpg")}
        >
          <View style={styles.formWrapper}>
            <Image
              style={styles.userImg}
              source={require("../assets/photo.svg")}
            />
            <Image
              style={styles.addPic}
              source={require("../assets/add.jpg")}
            />
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              onChangeText={setLoginName}
              onFocus={() => setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              placeholder="Логін"
            />
            <TextInput
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              onChangeText={setPassword}
              secureTextEntry={isPasswordShown ? false : true}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholder="Пароль"
            />

            <TouchableOpacity onPress={() => setShowPassword(!isPasswordShown)}>
              <Text style={styles.showPassword}>
                {isPasswordShown ? "Сховати" : "Показати"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={SingUp} style={styles.button}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
