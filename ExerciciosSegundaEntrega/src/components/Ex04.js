import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Ex04 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.left, { backgroundColor: "red" }]} />
      <View style={[styles.center, { backgroundColor: "green" }]} />
      <View style={[styles.right, { backgroundColor: "blue" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    height: "100%",
    width: "33.33%",
  },
  center: {
    height: "100%",
    width: "33.33%",
  },
  right: {
    height: "100%",
    width: "33.33%",
  },
});

export default Ex04;
