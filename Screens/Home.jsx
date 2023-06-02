import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./CreatePostsScreen";

import { styles } from "../styles/Registration";
const Tabs = createBottomTabNavigator();

const Home = ({ route }) => {
  const renderCustomIcon = (focused, source) => {
    return (
      <Image
        source={source}
        style={{
          width: 60,
          height: 60,
          tintColor: focused ? "tomato" : "gray",
        }}
      />
    );
  };

  return (
    <View style={styles.publicationWrapper}>
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
      <Tabs.Navigator initialRouteName="PostsScreen">
        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 40, height: 40, marginLeft: 90, marginTop: 22 }}
                source={require("../assets/grid.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Створити публікацію"
          component={CreatePostsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 70, height: 40, marginTop: 20 }}
                source={require("../assets/rectangle.png")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 90,
                  marginTop: 18,
                }}
                source={require("../assets/user.png")}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default Home;
