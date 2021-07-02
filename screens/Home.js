import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';

import FeaturedTile from '../components/FeaturedTile';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FeaturedTile
          title="WKND Adventures"
          imagePath="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1571954853062.coreimg.60.1600.jpeg/1622075943352/adobestock-216674449.jpeg"
          navigation={() => alert("test")}
        />
        <FeaturedTile
          title="Featured Adventure"
          subtitle="Downhill Skiing in Jackson Hole, Wyoming"
          imagePath="https://wknd.site/us/en/_jcr_content/root/container/carousel/teaser.coreimg.60.1600.jpeg/1622075943382/adobestock-185234795.jpeg"
          navigation={() => alert("test")}
        />
      </View>
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