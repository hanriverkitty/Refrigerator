import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "black",
    color: "white",
    fontSize: 30,
  },
  errorText: {
    color: "red",
  },
});
