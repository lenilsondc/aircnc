import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.main}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0
  }
});
