import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingWeather;
