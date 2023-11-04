import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import RowText from "../components/RowText";

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    title,
    subtext,
    subtext2,
    highLowWrapper,
    bodyWrapper,
  } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Fontisto name="cloudy-gusts" size={100} color="black" />
        <Text style={title}>Current Weather</Text>
        <Text style={subtext}>6</Text>
        <Text style={subtext}>Feels like 5</Text>
        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyle={highLowWrapper}
          messageOneStyle={subtext}
          messageTwoStyle={subtext}
        />
      </View>
      <RowText
        messageOne={"Cloudy"}
        messageTwo={"Wind: 10km/h"}
        containerStyle={bodyWrapper}
        messageOneStyle={subtext2}
        messageTwoStyle={subtext2}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    textAlign: "center",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "#eadee0",
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtext: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 36,
    color: "orange",
  },
  subtext2: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 24,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  bodyWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eadee0",
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    padding: 24,
  },
});
