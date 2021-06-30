import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Theme from "../constants/Colors";
import { BottomTabParamList } from "../types";
import HomeNavigator from "./HomeNavigator";
import AdventuresNavigator from "./AdventuresNavigator";
import TabBarIcon from "../components/TabBarIcon";

const Tabs = createBottomTabNavigator<BottomTabParamList>();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator
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
      <Tabs.Screen 
        name="Home" 
        component={HomeNavigator} 
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="Adventures" 
        component={AdventuresNavigator} 
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="apps-sharp" color={color} />,
        }}
      />
    </Tabs.Navigator>
  )
}
