import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Text, } from 'react-native-paper';

import fetchData from '../data';
import FeaturedTile from "../components/FeaturedTile";
import Card from "../components/Card";

export default function AdventuresScreen({ navigation }) {
  const [adventuresList, setAdventuresList] = useState(false);
  const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      display: "flex",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textTransform: "uppercase",
      padding: 15,
      paddingBottom: 0,
    },
    cardList: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });

  const getData = async () => {
    const json = await fetchData("adventuresList");
    console.log('json', json)
    if (json?.data?.adventureList?.items) setAdventuresList(json?.data?.adventureList?.items);
  }

  useEffect(() => { if (!adventuresList) getData(); });

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FeaturedTile
            title="WKND Adventures"
            imagePath="https://wknd.site/us/en/adventures/yosemite-backpacking/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1605054542975/adobestock-231698835.jpeg"
            height={100}
          />
          <Text style={styles.title}>Our Adventures</Text>
          {adventuresList && (
            <View style={styles.cardList}>
              {adventuresList.map((item, index) => <Card {...item} key={index} navigation={navigation} />)}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
