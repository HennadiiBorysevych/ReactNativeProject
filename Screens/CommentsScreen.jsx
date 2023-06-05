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
import { styles } from "../styles/CommentsScreen";
import { useNavigation } from "@react-navigation/native";

const CommentsScreen = () => {
  return (
    <View>
      <Image
        style={{
          width: 343,
          height: 240,
          marginLeft: 16,
          marginTop: 32,
          marginBottom: 34,
        }}
        source={require("../assets/forest.png")}
      />
      <View style={styles.chatWrapper}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/user2.png")}
        />
        <View style={styles.content}>
          <Text>
            Really love your most recent photo. I’ve been trying to capture the
            same thing for a few months and would love some tips!
          </Text>
          <Text style={styles.date}>09 червня, 2020 | 08:40</Text>
        </View>
      </View>
      <View style={styles.chatWrapper}>
        <View style={styles.content}>
          <Text>
            A fast 50mm like f1.8 would help with the bokeh. I’ve been using
            primes as they tend to get a bit sharper images.
          </Text>
          <Text style={styles.date}>09 червня, 2020 | 09:14</Text>
        </View>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/user1.png")}
        />
      </View>
      <View style={styles.chatWrapper}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/user2.png")}
        />
        <View style={styles.content}>
          <Text>Thank you! That was very helpful!</Text>
          <Text style={styles.date}>09 червня, 2020 | 09:20</Text>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;
