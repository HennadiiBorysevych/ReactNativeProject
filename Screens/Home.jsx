import { View, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import PostsScreen from "./PostsScreen"; // Assuming you have a separate PostsScreen component
// import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/Registration";
const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.publicationWrapper}>
      <Tabs.Navigator initialRouteName="Публікації">
        <Tabs.Screen
          name="Публікації"
          component={PostsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <Image
                style={{ width: 40, height: 40, marginLeft: 90, marginTop: 22 }}
                source={require("../assets/grid.png")}
              />
            ),
            headerRight: () => (
              <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                <Image
                  style={{ width: 24, height: 24, margin: 10 }}
                  source={require("../assets/log-out.png")}
                />
              </TouchableOpacity>
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
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Публікації")}>
                <Image
                  style={{ width: 24, height: 24, margin: 10 }}
                  source={require("../assets/arrow.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="Профіль"
          component={ProfileScreen}
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
