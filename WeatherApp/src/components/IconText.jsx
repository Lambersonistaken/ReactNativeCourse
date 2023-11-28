import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function IconText({ iconName, text, iconColor, bodyTextStyles }) {
  const { container, textTheme } = styles;
  return (
    <View style={container}>
      <Feather
        name={iconName}
        size={50}
        style={{ marginLeft: 15 }}
        color={iconColor}
      />
      <Text style={[textTheme, bodyTextStyles]}>{text}</Text>
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
  container: {
    alignItems: "center",
  },
});

export default IconText;
