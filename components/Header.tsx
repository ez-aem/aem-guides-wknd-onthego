import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

var width = Dimensions.get('window').width;

export default function HomeScreen(props) {
  console.log('props',props)
  return (
    <View style={styles.container}>
      <Text>Header Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    height: 10,
    width: width,
    backgroundColor: "#661324",
    flex: 1,
  }
})