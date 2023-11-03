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
          <Feather name={"user"} size={50} color={"white"} />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View>
          <Feather name={"sunrise"} size={50} color={"white"} />
          <Text>10:46:58 am</Text>
          <Feather name={"sunset"} size={50} color={"white"} />
          <Text>17:28:15 pm</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default City;
