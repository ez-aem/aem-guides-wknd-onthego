/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Adventures: undefined;
  Article: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  Article: undefined;
};

export type AdventuresParamList = {
  AdventuresScreen: undefined;
  Article: undefined;
};

export type AdventureCardType = {
  id: string | number;
  title: string;
  imageSrc: any;
  description: string;
  navigation: Function;
}
