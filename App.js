import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeRoute from './screens/Home';
import AdventuresRoute from './screens/Adventures';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'adventures', title: 'Adventures', icon: 'view-grid' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: HomeRoute,
    albums: AdventuresRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;