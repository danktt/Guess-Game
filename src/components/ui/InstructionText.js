import { StyleSheet, Text } from "react-native";
import Colors from "../../styles/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.primary,
    fontSize: 18,
  },
});
