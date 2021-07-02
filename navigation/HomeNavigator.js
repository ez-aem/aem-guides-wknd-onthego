import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/Home";
import ArticleScreen from '../screens/Article';

export default function HomeNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "", }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={({ route }) => ({ title: route?.params.title })}
      />
    </Stack.Navigator>
  )
}
