import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../styles/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.secondary100 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    margin: 4,
    borderRadius: 12,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    width: "100%",
  },
  buttonText: {
    color: Colors.base100,
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
