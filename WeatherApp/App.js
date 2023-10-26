import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";

function App() {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
