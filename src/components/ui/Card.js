import { StyleSheet, View } from "react-native";
import Colors from "../../styles/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    padding: 18,
    backgroundColor: Colors.secondary,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.base200,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
  },
});
