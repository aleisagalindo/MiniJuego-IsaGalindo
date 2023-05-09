import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import styles from "./styles";

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumption is</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card otherStyles={styles.buttonContainer}>
        <TouchableOpacity style={styles.confirmButton} title="Lower" onPress={() => console.log("Lower")}>
        <Text style={styles.buttonText}>Lower</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton} title="Higher" onPress={() => console.log("Higher")}>
        <Text style={styles.buttonText}>Higher</Text>
        </ TouchableOpacity>
      </Card>
    </View>
  );
};

export default GameScreen;
