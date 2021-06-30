import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AdventuresParamList } from "../types";
import AdventuresScreen from "../screens/AdventuresScreen";
import AppHeader from "../components/Header";
import ArticleScreen from "../screens/ArticleScreen";
import Theme from "../constants/Colors";

const Stack = createStackNavigator<AdventuresParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
        options={{ title:"WKND Adventures", }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({ route }) => ({ title: route?.params.props.title })}
      />
    </Stack.Navigator>
  );
}