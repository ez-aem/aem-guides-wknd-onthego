import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Tile } from "react-native-elements";

export default function AdventuresHeader() {
  return (
    <Tile
      activeOpacity={1}
      // height={150}
      overlayContainerStyle={styles.header}
      title="WKND Adventures"
      titleStyle={styles.title}
      imageSrc={require("../assets/images/mountain-bike.png")}
      featured
    />
  );
}

const styles = StyleSheet.create({
  header: {
    height: "5%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    color: "#202020",
    textTransform: "uppercase",
    fontWeight: "700",
  },
});
