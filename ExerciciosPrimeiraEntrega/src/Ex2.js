import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const Ex2 = () => {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View>
      <Button title="Inrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} />
      <Text> O Contador está em: {contador}</Text>
    </View>
  );
};

export default Ex2;
