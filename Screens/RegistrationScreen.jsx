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
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isLoginFocused, setLoginFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginName, setLoginName] = useState("");
  const [isPasswordShown, setShowPassword] = useState(false);

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }
  const SingUp = () => {
    Alert.alert(
      `Welcome, ${loginName}`,
      `Your mail: ${email} is registred, your password is ${password}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };
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
            <TouchableOpacity>
              <Image
                style={styles.userImg}
                source={require("../assets/photo.svg")}
              />
              <Image
                style={styles.addPic}
                source={require("../assets/add.jpg")}
              />
            </TouchableOpacity>

            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              onChangeText={setLoginName}
              value={loginName}
              onFocus={() => setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              placeholder="Логін"
            />
            <TextInput
              onChangeText={setEmail}
              value={email}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              keyboardType="email-address"
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
            <TouchableOpacity
              onPress={SingUp}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                width: 342,
                backgroundColor:"#FF6C00",
                height: 50,
                marginBottom: 16,
                marginTop: 15,
              }}
            >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.loginBtn}
            >
              <Text style={styles.loginBtnText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
