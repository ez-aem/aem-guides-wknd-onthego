import * as React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Theme from "../CONSTANTS"

export default function Article(props) {
  const { imageSrc, description } = props?.route?.params;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Image style={styles.image} source={{ uri: imageSrc }} />
          <View style={styles.content}>
            <Text style={styles.text}>{description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    resizeMode: "cover",
    height: 200,
    position: "relative",
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    color: Theme.colors.text,
  }
});