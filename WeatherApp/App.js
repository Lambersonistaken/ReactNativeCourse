import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import { StatusBar } from "expo-status-bar";

function App() {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
