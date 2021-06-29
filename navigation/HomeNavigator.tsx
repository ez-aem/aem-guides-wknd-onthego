import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import AppHeader from "../components/Header";

const Stack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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