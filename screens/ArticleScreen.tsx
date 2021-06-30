import * as React from "react";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { AdventureCardType } from "../types";

const width = Dimensions.get('window').width;

export default function Article(props: AdventureCardType) {
  const { id, title, imageSrc, description, navigation } = props?.route?.params?.props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Image style={styles.image} source={{ uri: imageSrc }} />
        <View style={styles.content}>
          <Text>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: width,
  },
  title: {
    margin: 15,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    resizeMode: "cover",
    maxHeight: 200,
    height: 200,
  },
  content: {
    padding: 25,
  }
});
