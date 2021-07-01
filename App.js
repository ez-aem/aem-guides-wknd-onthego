import * as React from 'react';
import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper';

import Theme from './Theme';
import HomeRoute from './screens/Home';
import AdventuresRoute from './screens/Adventures';
import ArticleRoute from './screens/Article';

export default function Main() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'adventures', title: 'Adventures', icon: 'view-grid' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    adventures: AdventuresRoute,
    article: ArticleRoute,
  });

  return (
    <PaperProvider theme={Theme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
};
