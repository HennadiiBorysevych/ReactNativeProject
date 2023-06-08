import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              options={({ route }) => ({
                headerShown: false,
              })}
            />
            <MainStack.Screen name="Posts" component={PostsScreen} />
            <MainStack.Screen
              name="Коментарі"
              component={CommentsScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Публікації")}
                  >
                    <Image
                      style={{ width: 24, height: 24, margin: 10 }}
                      source={require("./assets/arrow.png")}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="Локація"
              component={MapScreen}
              options={({ navigation }) => ({
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Публікації")}
                  >
                    <Image
                      style={{ width: 24, height: 24, margin: 10 }}
                      source={require("./assets/arrow.png")}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
