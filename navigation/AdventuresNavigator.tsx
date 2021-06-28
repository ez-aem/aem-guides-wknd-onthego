import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AdventuresParamList } from "../types";
import AdventuresScreen from "../screens/AdventuresScreen";
import AppHeader from "../components/Header";
import ArticleScreen from "../screens/ArticleScreen";

const Stack = createStackNavigator<AdventuresParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
        options={{
          title:"WKND Adventures",
          // headerTitle: (props) => <AppHeader {...props} title="WKND Adventures" />,
        }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({ route }) => ({ title: route?.params.props.title })}
      />
    </Stack.Navigator>
  );
}