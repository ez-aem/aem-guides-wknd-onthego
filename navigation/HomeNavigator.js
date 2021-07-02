import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/Home";
import ArticleScreen from '../screens/Article';
import Theme from '../Theme';

export default function HomeNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        screenOptions={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({ route }) => ({
          title: route?.params.title,
          headerTintColor: Theme.colors.text,
          headerStyle: {
            backgroundColor: Theme.colors.background
          }
        })}
      />
    </Stack.Navigator>
  )
}
