import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "../components/Icon";
import HomeNavigator from "./HomeNavigator";
import AdventuresNavigator from "./AdventuresNavigator";

export default function TabNavigator() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.colors.primary,
        inactiveTintColor: Theme.colors.text,
        activeBackgroundColor: Theme.colors.background,
        inactiveBackgroundColor: Theme.colors.background,
        style: {
          backgroundColor: Theme.colors.background,
          padding: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Adventures"
        component={AdventuresNavigator}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Icon name="apps-sharp" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  )
}