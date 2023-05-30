import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    height: "100%",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,

    color: "#212121",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  addPic: {
    width: 25,
    height: 25,
    marginTop: -34,
    marginLeft: 120,
    borderRadius: 12,
  },
  formWrapper: {
    width: "100%",
    height: "70%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px 25px 0px 0px",
  },
  userImg: {
    backgroundColor: "#F6F6F6",
    borderRadius: 15,
    marginTop: -60,
  },
  input: {
    width: 342,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 16,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    width: 342,
    height: 50,
    marginBottom: 16,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFF",
  },
  loginBtn: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  loginBtnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  inputFocused: {
    borderColor: "#FF6C00",
    borderWidth: 2,
  },
  showPassword: {
    fontWeight: 400,
    fontSize: 16,
    top: -50,
    left: 90,
    lineHeight: 19,
    position: "absolute",
    color: "#1B4371",
  },
});
