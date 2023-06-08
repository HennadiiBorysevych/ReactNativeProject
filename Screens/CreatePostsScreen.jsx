import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { styles } from "../styles/Registration";

import {
  setCameraRef,
  setHasPermission,
  setPhotoUri,
  setLocation,
  setAddress,
  setPicName,
} from "../redux/rootReducer";

const CreatePostsScreen = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const {
  //   hasPermission,
  //   cameraRef,
  //   photoUri,
  //   location,
  //   address,
  //   picName,
  // } = useSelector((state) => state.posts);
  // console.log("🚀 ~ file: CreatePostsScreen.jsx:39 ~ CreatePostsScreen ~ picName:", picName)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      dispatch(setLocation(coords));
      getAddressFromCoordinates(coords.latitude, coords.longitude);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      // dispatch(setHasPermission(status === "granted"));
    })();
  }, []);

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const apiKey = "AIzaSyD-Z4C2tt9F5kfGvt1U1gf7lOLt35cV7UM";
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      if (data.status === "OK") {
        const addressComponents = data.results[0].address_components;
        const city = extractAddressComponent(addressComponents, "locality");
        const country = extractAddressComponent(addressComponents, "country");
        dispatch(setAddress(`${city}, ${country}`));
      } else {
        throw new Error(data.error_message || "Invalid request");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const extractAddressComponent = (addressComponents, type) => {
    for (let component of addressComponents) {
      const types = component.types;
      if (types.includes(type)) {
        return component.long_name;
      }
    }
    return "";
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      dispatch(setPhotoUri(uri));
      getAddressFromCoordinates(location.latitude, location.longitude);
    }
  };

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={container.overlay}
      >
        <View style={container.container}>
          <Camera
            style={{ width: 343, height: 240, marginTop: 32 }}
            type={Camera.Constants.Type.back}
            ref={(ref) => dispatch(setCameraRef(ref))}
          >
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  // Flip camera logic
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    position: "absolute",
                    left: -40,
                    bottom: -100,
                  }}
                  source={require("../assets/turn.png")}
                />
              </TouchableOpacity>
              {photoUri ? (
                <Image
                  style={{
                    width: 343,
                    height: 240,
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                  source={{ uri: photoUri }}
                />
              ) : null}
              <TouchableOpacity onPress={takePhoto}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    position: "absolute",
                    left: "42%",
                    bottom: -20,
                    opacity: 0.3,
                  }}
                  source={require("../assets/camera.png")}
                />
              </TouchableOpacity>
            </View>
          </Camera>
          <TouchableOpacity onPress={() => dispatch(setPhotoUri(null))}>
            <Text style={styles.photoUpload}>
              {photoUri ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </TouchableOpacity>

          <TextInput
            onChangeText={(text) => dispatch(setPicName(text))}
            value={picName}
            style={styles.photoDes}
            keyboardType="default"
            placeholder="Назва..."
          />
          <MapView
            region={{
              ...location,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >
            {location && (
              <Marker
                title="I am here"
                coordinate={location}
                description="Hello"
              />
            )}
          </MapView>
          <TextInput
            value={address}
            style={styles.location}
            keyboardType="url"
            placeholder="Місцевість..."
          />
          <Image
            style={{
              width: 24,
              height: 24,
              position: "absolute",
              top: 409,
              left: -5,
            }}
            source={require("../assets/map.png")}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Публікації")}
            disabled={!photoUri}
            style={{
              ...styles.publishBtn,
              backgroundColor: photoUri ? "#FF6C00" : "#F6F6F6",
            }}
          >
            <Text style={{ color: photoUri ? "#FFF" : "#BDBDBD" }}>
              Опубліковати
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ width: 70, height: 40, marginTop: 50, marginBottom: 25 }}
              source={require("../assets/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const container = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePostsScreen;
