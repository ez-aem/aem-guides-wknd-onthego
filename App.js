import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import Theme from "./Theme";
import TabNavigator from "./navigation/TabNavigator";

export default function Main() {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}