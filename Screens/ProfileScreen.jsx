import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "../styles/Registration";

const ProfileScreen = () => {
  return (
    <View style={styles.userInfo}>
      <Image
        style={{ width: 60, height: 60 }}
        source={require("../assets/user.jpg")}
      />
      <View>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text>email@example.com</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
