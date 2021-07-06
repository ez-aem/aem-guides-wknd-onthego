import * as React from "react";
import { StyleSheet } from "react-native";
import { Card as PaperCard, Title, Paragraph } from "react-native-paper";

import { URL } from "../CONSTANTS";

export default function Card(props) {
  const { navigation } = props;
  const adventure = props.adventure;
  const title = adventure.adventureTitle;
  const description = adventure.adventureDescription?.html;
  let imagePath = adventure?.adventurePrimaryImage?._path;
  if (!imagePath.startsWith("http")) imagePath = `${URL}${imagePath}`;

  return (
    <PaperCard style={styles.card} onPress={() => navigation.navigate("Article", { adventure })}>
      <PaperCard.Cover source={{ uri: imagePath }} resizeMode="cover" style={styles.cardImage} />
      <Title style={styles.cardTitle}>{title}</Title>
      <Paragraph numberOfLines={3} ellipsizeMode={"tail"} style={styles.cardDescription}>{description}</Paragraph>
    </PaperCard>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    flexBasis: "50%",
  },
  cardTitle: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    padding: 0,
    margin: 0,
  },
  cardDescription: {
    padding: 0,
    margin: 0,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  }
})