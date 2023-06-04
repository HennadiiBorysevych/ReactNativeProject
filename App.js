import "react-native-gesture-handler";
import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          // options={(route) => ({
          //   title: "Публікації",
          //   headerStyle: {
          //     backgroundColor: "transparent",
          //     borderBottomWidth:1,
          //     borderBottomColor:'#e5e5e5'
          //   },
          //   headerTintColor: "#212121",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //     fontSize: 17,
          //   },
          //   headerRight: () => (
          //     <TouchableOpacity>
          //       <Image
          //         style={{ width: 24, height: 24, margin: 10 }}
          //         source={require("./assets/log-out.png")}
          //       />
          //     </TouchableOpacity>
          //   ),
          //   headerLeft: null,
          // })}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
        <MainStack.Screen name="Posts" component={PostsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
