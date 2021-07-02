import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

import FeaturedTile from "../components/FeaturedTile";
import Data from "../data/home.json";

export default function HomeScreen({ navigation }) {
  const [adventureData, setAdventureData] = React.useState(false);
  const [featuredAdventuresData, setFeaturedAdventuresData] = React.useState([]);
  React.useEffect(() => {
    setAdventureData(Data?.data?.appByPath?.item);
    setFeaturedAdventuresData(Data?.data?.adventureList?.items);
  });

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {adventureData && <FeaturedTile
          title={adventureData?.appTitle}
          imagePath={adventureData?.appHeroImage?._path}
          navigation={() => navigation.navigate("Adventures")}
        />}
        {featuredAdventuresData.length > 0 && featuredAdventuresData.map((item, index) => (
          <FeaturedTile
            key={index}
            title="Featured Adventure"
            subtitle={item?.adventureTitle}
            imagePath={item?.adventurePrimaryImage?._path}
            navigation={() => navigation.navigate("Article", { ...item })}
          />
        ))}
      </ScrollView>
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