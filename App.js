import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import Theme from "./CONSTANTS";
import TabNavigator from "./navigation/TabNavigator";

export default function Main() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer theme={Theme}>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}