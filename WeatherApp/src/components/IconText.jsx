import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function IconText({ iconName, text, iconColor, bodyTextStyles }) {
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTheme: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default IconText;
