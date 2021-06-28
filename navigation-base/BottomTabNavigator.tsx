/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import AdventuresScreen from "../screens/AdventuresScreen";
import { BottomTabParamList, HomeParamList, AdventuresParamList } from "../types";
import AdventuresHeader from "../components/AdventuresHeader";
import Header from "../components/Header";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ paddingVertical: 15 }}
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Adventures"
        component={AdventuresNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="apps-sharp" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
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

const AdventuresStack = createStackNavigator<AdventuresParamList>();

function AdventuresNavigator() {
  return (
    <AdventuresStack.Navigator>
      <AdventuresStack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
    </AdventuresStack.Navigator>
  );
}
