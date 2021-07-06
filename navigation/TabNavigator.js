import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Theme from "../CONSTANTS";
import Icon from "../components/Icon";
import HomeNavigator from "./HomeNavigator";
import AdventuresNavigator from "./AdventuresNavigator";

export default function TabNavigator() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Theme.colors.accent}
      inactiveColor={Theme.colors.text}
      barStyle={{ backgroundColor: Theme.colors.background }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Adventures"
        component={AdventuresNavigator}
        options={{
          tabBarLabel: "Adventures",
          tabBarIcon: ({ color }) => <Icon name="apps-sharp" color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}