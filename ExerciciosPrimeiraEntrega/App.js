import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ex1 from "./src/Ex1";
import Ex2 from "./src/Ex2";
import Ex3 from "./src/Ex3";
import Ex4 from "./src/Ex4";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Ex1 nome = "Henrique"/> */}
      {/* <Ex2></Ex2> */}
      {/* <Ex3></Ex3> */}
      {/* <Ex4></Ex4> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
