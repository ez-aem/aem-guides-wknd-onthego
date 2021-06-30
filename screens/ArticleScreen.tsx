import * as React from "react";
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";
import { AdventureCardType } from "../types";
import Theme from "../constants/Colors";

const width = Dimensions.get('window').width;

export default function Article(props: AdventureCardType) {
  const { navigation } = props;
  const { id, title, imageSrc, description } = props?.route?.params?.props;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backContainer}>
          <Ionicons name="chevron-back" size={35} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Image style={styles.image} source={{ uri: imageSrc }} />
          <View style={styles.content}>
            <Text>{description}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
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
  header: {
    paddingRight: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    width: Dimensions.get('window').width,
  },
  backContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  backIcon: {
    color: Theme.colors.text,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    width: Dimensions.get('window').width - 50,
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    resizeMode: "cover",
    maxHeight: 200,
    height: 200,
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
