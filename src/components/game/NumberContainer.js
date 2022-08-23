import { StyleSheet, Text, View } from "react-native";
import Colors from "../../styles/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: 24,
    borderColor: Colors.primary,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 38,
    color: Colors.primary,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
