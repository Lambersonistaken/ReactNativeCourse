import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";

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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

function UpcomingWeather() {
  const renderItem = ({ item }) => {
    return (
      <Item
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#a2d2ff",
  },
  item: {
    backgroundColor: "#ffafcc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 16,
    borderWidth: 4,
    borderColor: "#cdb4db",
  },
  temp: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default UpcomingWeather;
