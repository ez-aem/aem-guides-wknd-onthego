import * as React from "react";
import { ImageBackground, Pressable, StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";

const width = Dimensions.get('window').width;

export default function FeaturedTile({ 
  title, 
  subtitle, 
  imagePath,
  navigation,
}: { 
  title: string, 
  subtitle?: string, 
  imagePath: any,
  navigation: Function
}) {

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation()}>
        <ImageBackground source={imagePath} style={styles.image}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.25,
    margin: 0,
  },
  pressable: {
    flex: 1,
    height: Dimensions.get('window').height / 2.25,
  },
  image: {
    padding: 10,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    resizeMode: "cover",
    height: Dimensions.get('window').height / 2.25,
  },
  title: {
    color: "#202020",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 25,
  },
  subtitle: {
    color: "#202020",
    textTransform: "uppercase",
    fontWeight: "600"
  }
})