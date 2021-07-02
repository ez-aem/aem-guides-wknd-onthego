import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdventuresScreen from "../screens/Adventures";
import ArticleScreen from '../screens/Article';

export default function AdventuresNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
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
