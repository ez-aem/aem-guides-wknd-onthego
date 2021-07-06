import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

import fetchData from '../data';
import FeaturedTile from "../components/FeaturedTile";

export default function HomeScreen({ navigation }) {
  const [adventureData, setAdventureData] = useState(false);
  const [featuredAdventuresData, setFeaturedAdventuresData] = useState([]);

  const getData = async () => {
    const json = await fetchData("home");
    if (json?.data?.appByPath?.item) setAdventureData(json?.data?.appByPath?.item);
    if (json?.data?.adventureList?.items) setFeaturedAdventuresData(json?.data?.adventureList?.items);
  }

  useEffect(() => {
    if (!adventureData) getData();
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