import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';

export default function HomeRoute() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  },
});