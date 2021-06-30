import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { View } from "../components/Themed";
import Card from "../components/Card";

const cardList = [
  {
    id: "1",
    title: "Surf camps in Costa Rica",
    imageSrc: "https://wknd.site/us/en/adventures/surf-camp-costa-rica/_jcr_content/root/container/carousel/image.coreimg.60.400.jpeg/1604549043241/adobestock-278302117.jpeg",
    description: "Costa Rica is the ideal location for a first surf trip. It is a safe place to travel and the locals are quite friendly and happy to see other surfers."
  },
  {
    id: "2",
    title: "Ski the Alps",
    imageSrc: "https://wknd.site/us/en/adventures/ski-touring-mont-blanc/_jcr_content/root/container/carousel/item_1571168419252.coreimg.60.400.jpeg/1604549031316/adobestock-238230356.jpeg",
    description: "The Alps are the ideal location for a first ski trip. It is a safe place to travel and the locals are quite friendly and happy to see other skiiers."
  },
  {
    id: "3",
    title: "Oktoberfest!",
    imageSrc: "https://wknd.site/us/en/adventures/beervana-portland/_jcr_content/root/container/carousel/image.coreimg.60.400.jpeg/1604549052135/adobestock-200192344.jpeg",
    description: "Visit Germany to get your fill of beer, sausage and revel in the festivities of Oktoberfest."
  },
  {
    id: "4",
    title: "Colorado Rock Climbing",
    imageSrc: "https://wknd.site/us/en/adventures/colorado-rock-climbing/_jcr_content/root/container/carousel/image.coreimg.60.400.jpeg/1604868049561/adobestock-201222633.jpeg",
    description: "Colorado is the ideal location to learn rock climbing. Endless adventures in beautiful scenery."
  },
  {
    id: "5",
    title: "Adventure Mountain Biking",
    imageSrc: "https://wknd.site/us/en/adventures/whistler-mountain-biking/_jcr_content/root/container/carousel/image.coreimg.60.400.jpeg/1604549042549/adobestock-122615840.jpeg",
    description: "Come join enthusiastic mountain bikers in the beautiful hills of Northern California."
  },
  {
    id: "6",
    title: "Wine Tour in Italy",
    imageSrc: "https://wknd.site/us/en/adventures/cycling-tuscany/_jcr_content/root/container/carousel/image.coreimg.60.400.jpeg/1604549044915/adobestock-59459597.jpeg",
    description: "If you want the best wine tasting in an idilac setting, Italy is the place to be."
  },
  {
    id: "7",
    title: "Western Australia by Camper Van",
    imageSrc: "https://wknd.site/us/en/magazine/western-australia/_jcr_content/root/container/image.coreimg.60.1600.jpeg/1594325802353/adobestock-156407519.jpeg",
    description: "The Australian West coast is a camper’s heaven."
  },
  {
    id: "8",
    title: "Downhill Skiing Wyoming",
    imageSrc: "https://wknd.site/us/en/adventures/downhill-skiing-wyoming/_jcr_content/root/container/carousel/image.coreimg.60.1600.jpeg/1604549052102/adobestock-185234795.jpeg",
    description: "A skiers paradise far from crowds and close to nature with terrain so vast it appears uncharted."
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
