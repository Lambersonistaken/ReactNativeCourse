import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2021-07-27 12:00:00",
    main: {
      temp_max: 30,
      temp_min: 25,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2021-07-28 15:00:00",
    main: {
      temp_max: 20,
      temp_min: 15,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2021-07-29 18:00:00",
    main: {
      temp_max: 25,
      temp_min: 20,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

function UpcomingWeather() {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require("../../assets/1.jpg")}>
        <Text style={styles.title}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#a2d2ff",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default UpcomingWeather;
