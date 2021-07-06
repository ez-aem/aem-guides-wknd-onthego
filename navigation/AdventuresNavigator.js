import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AdventuresScreen from "../screens/Adventures";
import ArticleScreen from '../screens/Article';
import Theme from '../CONSTANTS';

export default function AdventuresNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
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