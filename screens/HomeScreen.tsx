import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import FeaturedTile from "../components/FeaturedTile";
import RawData from "../data/home";

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
    flexDirection: "column",
    display: "flex",
  },
});
