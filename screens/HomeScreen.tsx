import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import FeaturedTile from "../components/FeaturedTile";
import RawData from "../data/home";

/* <Tile
  imageSrc={require("../assets/images/mountain-bike.png")}
  title="WKND Adventures"
  // titleStyle={styles.title}
  onPress={() => navigation.navigate("Adventures")}
  overlayContainerStyle={styles.overlayContainer}
  featured
/>
<Tile
  imageSrc={require("../assets/images/skiing.png")}
  title="Featured Experience"
  // titleStyle={styles.title}
  caption="Guide to perfect skiing powder"
  captionStyle={styles.caption}
  featured
  overlayContainerStyle={styles.overlayContainer}
  onPress={() => navigation.navigate("Article", { id: "2"})}
/> */


export default function HomeScreen({ navigation }) {
  const adventures = RawData.data.appByPath.item;
  const featured = RawData.data.adventureList.items[0];

  return (
    <View style={styles.container}>
      <FeaturedTile 
        title={adventures.appTitle}
        imagePath={adventures.appHeroImage._path}
        navigation={() => navigation.navigate("Adventures")}
      />
      <FeaturedTile 
        title="Featured Experience"
        subtitle={featured.adventureTitle}
        imagePath={featured.adventurePrimaryImage._path}
        navigation={() => navigation.navigate("Article", { props: featured })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
