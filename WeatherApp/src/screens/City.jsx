import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

function City() {
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <Text>City</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default City;
