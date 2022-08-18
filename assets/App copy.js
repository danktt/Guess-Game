import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.firstSpace}>
          <View style={styles.headerContainer}>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={{ uri: "https://github.com/danktt.png" }}
              />
              <Text style={styles.imageText}>Danilo Miranda</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.SecondSpace}></View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EA",
    paddingTop: 50,
  },
  container2: {
    backgroundColor: "#4F5D75",
    flex: 0.6,
  },
  container3: {
    backgroundColor: "#EF8354",
    flex: 1,
  },

  headerContainer: {
    alignSelf: "center",
    backgroundColor: "#21A0A0",
    width: "95%",
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  imageView: {
    width: "30%",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 8,
    marginRight: 13,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#cccccc",
  },
  imageText: {
    color: "#fff",
  },
  firstSpace: {
    flex: 1,
    backgroundColor: "#EF8354",
    borderBottomLeftRadius: 60,
  },
  SecondSpace: {
    flex: 1,
    backgroundColor: "#4F5D75",
    borderTopRightRadius: 60,
  },
});
