import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import Colors from "./src/styles/colors";

export default function App() {
  const [userNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickerNumber) {
    setUseNumber(pickerNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  let Screen = <StartGameScreen pickerNumber={pickedNumberHandler} />;

  if (userNumber) {
    Screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    Screen = <GameOverScreen />;
  }

  return (
    <>
      <LinearGradient
        colors={[Colors.linear100, Colors.linear200]}
        style={style.rootScreen}
      >
        <ImageBackground
          resizeMode="cover"
          style={style.rootScreen}
          source={require("./assets/image/background.png")}
          imageStyle={style.image}
        >
          <SafeAreaView style={style.rootScreen}>{Screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});
