import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

function City() {
  const { container, imageLayout, cityName, countryName, cityText } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={imageLayout}
        source={require("../../assets/city.jpg")}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={styles.populationWrapper}>
          <IconText
            iconName={"user"}
            text={"8000"}
            iconColor={"white"}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={"sunrise"}
            text={"10:46:58 am"}
            iconColor={"white"}
            bodyTextStyles={styles.riseSetText}
          />

          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            text={"17:28:15 pm"}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
  },
  imageLayout: {
    flex: 1,
    width: "100%",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  populationWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 30,
    color: "white",
    marginLeft: 20,
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 10,
    marginTop: 0,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
});
export default City;
