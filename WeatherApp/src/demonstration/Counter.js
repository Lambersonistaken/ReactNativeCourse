import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Counter() {
  let counter = 0;
  return (
    <View>
      <Text>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Counter;
