import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AdventuresParamList } from "../types";
import AdventuresScreen from "../screens/AdventuresScreen";
import AppHeader from "../components/Header";

const AdventuresStack = createStackNavigator<AdventuresParamList>();

export default function HomeNavigator() {
  return (
    <AdventuresStack.Navigator>
      <AdventuresStack.Screen
        name="AdventuresScreen"
        component={AdventuresScreen}
        options={{
          title:"WKND Adventures",
          // headerTitle: (props) => <AppHeader {...props} title="WKND Adventures" />,
        }}
      />
    </AdventuresStack.Navigator>
  );
}