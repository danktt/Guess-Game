import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

// import { Container } from './styles';
import Colors from "../styles/colors";

export default function StartGameScreen({ pickerNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enterdText) {
    setEnteredNumber(enterdText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickerNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton children="Reset" onPress={resetInputHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton children="Confirm" onPress={confirmInputHandler} />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    color: Colors.primary,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
