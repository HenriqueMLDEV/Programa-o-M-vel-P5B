import { View, Text } from "react-native";
import React from "react";

const Ex4 = () => {
  const alunos = ["Henrique", "Jardel", "Isthefani", "Julio"];
  return (
    <View>
      {alunos.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default Ex4;
