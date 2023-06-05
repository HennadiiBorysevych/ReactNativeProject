import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/PostsScreen";

const PostsScreen = ({ navigation }) => {
  const location = "Wroclaw, Poland";
  return (
    <>
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
      <View style={{ marginLeft: 16, marginTop: 32 }}>
        <Image
          style={{
            width: 343,
            height: 240,
          }}
          source={require("../assets/forest.png")}
        />
        <Text style={styles.name}>Ліс</Text>
        <View style={styles.postInfoWrapper}>
          <View>
            <TouchableOpacity
              style={styles.infoFlex}
              onPress={() => navigation.navigate("Коментарі")}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require("../assets/message-circle.png")}
              />
              <Text style={styles.name}>0</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.infoFlex}
              onPress={() => navigation.navigate("Локація", { location  })}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                }}
                source={require("../assets/map.png")}
              />
              <Text style={styles.location}>{location}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 16, marginTop: 32 }}>
        <Image
          style={{
            width: 343,
            height: 240,
          }}
          source={require("../assets/forest.png")}
        />
        <Text style={styles.name}>Ліс</Text>
        <View style={styles.postInfoWrapper}>
          <View style={styles.infoFlex}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require("../assets/message-circle.png")}
            />
            <Text style={styles.name}>0</Text>
          </View>
          <View style={styles.infoFlex}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require("../assets/map.png")}
            />
            <Text style={styles.location}>Wroclaw, Poland</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PostsScreen;
