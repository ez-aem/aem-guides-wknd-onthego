import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import HomeNavigator from "./HomeNavigator";
import AdventuresNavigator from "./AdventuresNavigator";
import TabBarIcon from "../components/TabBarIcon";
import ArticleScreen from "../screens/ArticleScreen"

const Tabs = createBottomTabNavigator<BottomTabParamList>();

export default function TabsNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs.Navigator 
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
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
