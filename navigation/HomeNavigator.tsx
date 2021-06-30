import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";

const Stack = createStackNavigator<HomeParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title:"", }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({ route }) => ({ title: route?.params.props.title })}
      />
    </Stack.Navigator>
  );
}