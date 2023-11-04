import React from "react";
import { View, Text, StyleSheet } from "react-native";

function RowText({
  messageOne,
  messageTwo,
  messageOneStyle,
  messageTwoStyle,
  containerStyle,
}) {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default RowText;
