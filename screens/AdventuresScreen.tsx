import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { View } from "../components/Themed";
import Card from "../components/Card";

const cardList = [
  {
    id: "1",
    title: "Surf camps in Costa Rica",
    imageSrc: require("../assets/images/beach-surfer.png"),
    description: "Costa Rica is the ideal location for a first surf trip. It is a safe place to travel and the locals are quite friendly and happy to see other surfers."
  },
  {
    id: "2",
    title: "Ski the Alps",
    imageSrc: require("../assets/images/skiing.png"),
    description: "The Alps are the ideal location for a first ski trip. It is a safe place to travel and the locals are quite friendly and happy to see other skiiers."
  },
  {
    id: "3",
    title: "Oktoberfest!",
    imageSrc: require("../assets/images/mountain-bike.png"),
    description: "Visit Germany to get your fill of beer, sausage and revel in the festivities of Oktoberfest."
  },
  {
    id: "4",
    title: "Colorado Rock Climbing",
    imageSrc: require("../assets/images/rock-climbing.png"),
    description: "Colorado is the ideal location to learn rock climbing. Endless adventures in beautiful scenery."
  },
  {
    id: "5",
    title: "Adventure Mountain Biking",
    imageSrc: require("../assets/images/surfing.png"),
    description: "Come join enthusiastic mountain bikers in the beautiful hills of Northern California."
  },
  {
    id: "6",
    title: "Wine Tour in Italy",
    imageSrc: require("../assets/images/vineyard.png"),
    description: "If you want the best wine tasting in an idilac setting, Italy is the place to be."
  },
]

export default function AdventuresScreen({ navigation }: { navigation: Function }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardList}>
        {cardList && cardList.map((card,index) => <Card {...card} key={index} navigation={navigation} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 20,
  },
  cardList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
