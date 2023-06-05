import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  name: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",

    marginTop: 8,
  },
  userInfo: {
    marginTop: 32,
    marginLeft: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    fontWeight: 700,
    fontSize: 13,
    color: "#212121",
  },
  postInfoWrapper: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },
  location: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    marginRight: 20,
    color: "#000",
    textDecorationLine: "underline"

  },
});
