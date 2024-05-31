import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext.js";

const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, theme === "dark" ? styles.dark : styles.light]}
    >
      <Text style={theme === "dark" ? styles.darkText : styles.lightText}>
        O tema no momento é: {theme}
      </Text>

      <Button title="Alterar Tema" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dark: {
    backgroundColor: "#333",
  },
  light: {
    backgroundColor: "#FFF",
  },
  darkText: {
    color: "#FFF",
  },
  lightText: {
    color: "#333",
  },
});

export default MainComponent;
