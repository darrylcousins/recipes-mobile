import React from 'react';
import { Root } from 'native-base';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Recipes from './screens/Recipes';

const AppNavigator = createStackNavigator(
  {
    Recipes: { screen: Recipes },
  },
  {
    initialRouteName: 'Recipes',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
