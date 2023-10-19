import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Current Weather</Text>
        <Text style={styles.subtext}>6</Text>
        <Text style={styles.subtext}>Feels like 5</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.subtext}>High: 8</Text>
          <Text style={styles.subtext}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.subtext2}>Cloudy</Text>
        <Text style={styles.subtext2}>Wind: 10km/h</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    textAlign: "center",
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
    justifyContent: "space-around",
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
