import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import { Card, Text, Title, Paragraph } from 'react-native-paper';

import FeaturedTile from "../components/FeaturedTile";

export default function AdventuresRoute() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FeaturedTile
            title="WKND Adventures"
            imagePath="https://wknd.site/us/en/_jcr_content/root/container/carousel/item_1571954853062.coreimg.60.1600.jpeg/1622075943352/adobestock-216674449.jpeg"
            navigation={() => alert("test")}
            height={100}
          />
          <Text>Our Adventures</Text>
          {[700, 702, 703, 704, 705, 706].map(number => (
            <Card>
              <Card.Cover source={{ uri: `https://picsum.photos/${number}` }} />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
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
    flexDirection: "column",
    display: "flex",
  },
});