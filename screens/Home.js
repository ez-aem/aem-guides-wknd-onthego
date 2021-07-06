import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { HOME_SCREEN_DATA } from "../CONSTANTS";
import FeaturedTile from "../components/FeaturedTile";

export default function HomeScreen({ navigation }) {
  const [adventureData, setAdventureData] = React.useState(false);
  const [featuredAdventuresData, setFeaturedAdventuresData] = React.useState([]);

  const fetchHomeScreenData = async () => {
    const response = await fetch(HOME_SCREEN_DATA);
    const json = await response.json();
    const adventure = json?.data?.appByPath?.item || false;
    const adventuresList = json?.data?.adventureList?.items || [];

    if (adventure) setAdventureData(adventure);
    if (adventuresList) setFeaturedAdventuresData(adventuresList);
  }

  React.useEffect(() => {
    if (!adventureData) fetchHomeScreenData();
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