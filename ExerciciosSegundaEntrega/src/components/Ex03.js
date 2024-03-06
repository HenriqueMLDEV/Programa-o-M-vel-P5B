import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Ex03 = () => {
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
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    height: 50,
    width: "25%",
  },
  center: {
    height: 50,
    width: "50%",
  },
  right: {
    height: 50,
    width: "25%",
  },
});

export default Ex03;
