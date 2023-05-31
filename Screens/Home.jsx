import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/Registration";
const Tabs = createBottomTabNavigator();
const Home = ({ route }) => {
  return (
    <View>
      <View style={styles.userInfo}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../assets/user.jpg")}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Profile") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen name="Settings" component={} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
      </View>
    </View>
  );
};

export default Home;
