import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import AppHeader from "../components/Header";
import Theme from "../constants/Colors";

const Stack = createStackNavigator<HomeParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: Theme.colors.background, }, headerBackTitle: "" }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          title:"",
          // headerTitle: (props) => <AppHeader {...props} title="" />,
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