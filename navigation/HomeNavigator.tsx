import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import Header from "../components/Header";

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
    </HomeStack.Navigator>
  );
}