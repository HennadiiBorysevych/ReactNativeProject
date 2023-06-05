import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatWrapper: {
    marginLeft: 16,
    marginRight: 16,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom:24
  },
  content: {
    width: 299,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    textAlign: "left",
  },
  date: {
    fontWeight: 400,
    fontSize: 10,
    textAlign: "right",
    color: "#BDBDBD",
    marginTop:8,
  },
});
