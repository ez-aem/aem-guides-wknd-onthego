import React, { useState, useEffect } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HTML from "react-native-render-html";

import Theme, { URL } from "../CONSTANTS"
import fetchData from "../data";

export default function Article(props) {
  if (!props?.route?.params?.adventure?._path) return false;

  const width = Dimensions.get("window").width;
  const { navigation } = props;
  const [article, setArticle] = useState(false);
  const [imagePath, setImagePath] = useState(false);
  const [description, setDescription] = useState(false);

  const getData = async () => {
    const json = await fetchData("article", props.route.params.adventure._path);
    const data = json?.data?.adventureByPath?.item || false;
    if (data) {
      setArticle(data);
      navigation.setParams({ title: data?.adventureTitle });
      setDescription(data.adventureDescription.html);
      setImagePath(data?.adventurePrimaryImage?._path?.startsWith("http") ? data?.adventurePrimaryImage?._path : `${URL}${data?.adventurePrimaryImage?._path}`);
    }
  }

  useEffect(() => { if (!article) getData(); });

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          {imagePath && <Image style={styles.image} source={{ uri: imagePath }} />}
          {description && <View style={styles.content}>
            <HTML
              source={{ html: description }}
              style={styles.text}
              baseFontStyle={styles.text}
              contentWidth={width}
            />
          </View>}
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
  },
  scrollContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    resizeMode: "cover",
    height: 200,
    position: "relative",
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    color: Theme.colors.text,
  }
});