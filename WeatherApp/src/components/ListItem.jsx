import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListItem(props) {
  const { dt_txt, min, max, condition } = props;

  const { item, temp, date } = styles;

  return (
    <View style={item}>
      <Feather
        style={{ marginBottom: 20 }}
        name="sun"
        size={50}
        color="white"
      />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#a2d2ff",
  },
  item: {
    backgroundColor: "#ffafcc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#cdb4db",
  },
  temp: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "5%",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: "5%",
  },
});
