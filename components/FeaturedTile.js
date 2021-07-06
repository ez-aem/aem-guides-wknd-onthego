import * as React from "react";
import { Dimensions, ImageBackground, Pressable, StyleSheet, View, Text } from "react-native";

import { URL } from "../CONSTANTS";

export default function FeaturedTile(props) {
  const { subtitle, title } = props;
  const navigation = props.navigation || null;
  let { imagePath } = props;
  if (!imagePath.startsWith("http")) imagePath = `${URL}${imagePath}`;

  const styles = StyleSheet.create({
    pressable: {
      flex: 1,
      flexDirection: "column",
      width: Dimensions.get('window').width,
      height: props.height ? props.height : "auto",
      margin: 0,
    },
    image: {
      flex: 1,
      padding: 10,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      height: props.height ? props.height : "auto",
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
  });

  if (props.height) delete styles.pressable.flex;

  return (
    <Pressable onPress={navigation} style={styles.pressable}>
      <ImageBackground resizeMode="cover" source={{ uri: imagePath }} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </ImageBackground>
    </Pressable>
  );
}

