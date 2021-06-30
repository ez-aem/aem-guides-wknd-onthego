import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigator from "./TabsNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import Theme from "../constants/Colors";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
        <Stack.Screen name="Root" component={TabsNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}