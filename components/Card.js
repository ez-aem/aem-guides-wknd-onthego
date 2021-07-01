import * as React from "react";
import { StyleSheet } from "react-native";
import { Card as PaperCard, Title, Paragraph } from "react-native-paper";

export default function Card(props) {
  const { id, title, imageSrc, description, navigation } = props;

  return (
    <PaperCard style={styles.card}>
      <PaperCard.Cover source={{ uri: imageSrc }} resizeMode="cover" style={styles.cardImage} />
      <Title style={styles.cardTitle}>{title}</Title>
      <Paragraph style={styles.cardDescription}>{description}</Paragraph>
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