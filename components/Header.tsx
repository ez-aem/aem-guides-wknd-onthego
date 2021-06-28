import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Header,  Icon,  } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
// import WKNDImage from "../assets/images/mountain-bike.png";

var width = Dimensions.get('window').width;



export default function AppHeader({ title }: { title: string }) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin: 0,
      height: 10,
      width: width,
      backgroundColor: Colors[colorScheme].background,
      color: Colors[colorScheme].text,
      flex: 1,
      minHeight: 15,
      maxHeight: 100,
      alignContent: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    }
  })
  console.log('title',title)

  // <Header
  //   backgroundImageStyle={{}}
  //   barStyle="default"
  //   centerComponent={{
  //     text: "MY TITLE",
  //     style: styles.title
  //   }}
  //   centerContainerStyle={{}}
  //   containerStyle={styles.container}
  //   leftComponent={{ icon: "menu", color: "#fff" }}
  //   leftContainerStyle={{}}
  //   placement="center"
  //   rightComponent={{ icon: "home", color: "#fff" }}
  //   rightContainerStyle={{}}
  //   statusBarProps={{}}
  // />
  return (
    <Header>
      <LeftComponent />
    </Header>
  )
}

function LeftComponent() {
  return (
    
    <View>
      <Text></Text>
    </View>
  )
}