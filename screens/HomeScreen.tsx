import * as React from "react";
import { StyleSheet } from "react-native";
import { Tile } from "react-native-elements";
import { Text, View } from "../components/Themed";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Tile
        imageSrc={require("../assets/images/mountain-bike.png")}
        title="WKND Adventures"
        titleStyle={styles.title}
        onPress={() => navigation.navigate("Adventures")}
        overlayContainerStyle={styles.overlayContainer}
        featured
      />
      <Tile
        imageSrc={require("../assets/images/skiing.png")}
        title="Featured Experience"
        titleStyle={styles.title}
        caption="Guide to perfect skiing powder"
        captionStyle={styles.caption}
        featured
        overlayContainerStyle={styles.overlayContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#202020",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  caption: {
    color: "#202020",
    textTransform: "uppercase",
    fontWeight: "600"
  }
});
