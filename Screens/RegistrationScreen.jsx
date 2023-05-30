import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/bg.jpg")}
      >
        <View style={styles.formWrapper}>
          <Image
            style={styles.userImg}
            source={require("../assets/photo.svg")}
          />
          <Image style={styles.addPic} source={require("../assets/add.jpg")} />
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            onFocus={() => setLoginFocused(true)}
            onBlur={() => setLoginFocused(false)}
            style={[styles.input, isLoginFocused && styles.inputFocused]}
            placeholder="Логін"
          />
          <TextInput
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            keyboardType="visible-password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            style={[styles.input, isPasswordFocused && styles.inputFocused]}
            placeholder="Пароль"
          />
          <TouchableOpacity>
            <Text style={styles.showPassword}>Показати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
