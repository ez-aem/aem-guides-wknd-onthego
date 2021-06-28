import * as React from "react";
import { ActivityIndicator, StyleSheet, FlatList, ScrollView, Pressable, Image } from "react-native";
import { AdventureCardType } from "../types";

import { Text, View } from "../components/Themed";

export default function Card({ title, imageSrc, description, navigation }: AdventureCardType) {
  console.log('navigation', navigation)
  return (
    <Pressable style={styles.card} onPress={() => alert('test')}>
      <Image source={imageSrc} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flexBasis: "50%",
  },
  cardTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    padding: 0,
  },
  cardDescription: {
  },
  cardImage: {
    width: "100%",
    height: 100,
  }
})
