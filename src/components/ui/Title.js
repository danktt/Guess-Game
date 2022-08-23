import { StyleSheet, Text } from "react-native";
import Colors from "../../styles/colors";

export default function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

const style = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    // fontWeight: "bold",
    color: Colors.base100,
    textAlign: "center",
    borderColor: Colors.base100,
    borderWidth: 2,
    padding: 12,
    borderRadius: 8,
  },
});
