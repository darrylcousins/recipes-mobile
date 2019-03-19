import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'

import { SimpleLineIcons } from '@expo/vector-icons'

import Home from '../screens/home'
import List from '../screens/list'
import Detail from '../screens/detail'
import Search from '../screens/search'

const ListStack = createStackNavigator({
  List: List,
  Detail: Detail,
})

const Navigator = createBottomTabNavigator(
  // Route Configs
  {
    Home: { screen: Home},
    List: { screen: ListStack },
    Search: { screen: Search }
  },
  // BottomTabNavigator Config
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = "home"
        } else if (routeName === 'List' || routeName === 'Detail') {
          iconName = "list"
        } else if (routeName === 'Search') {
          iconName = "magnifier"
        }

        return <SimpleLineIcons name={ iconName } size={ 25 } />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    }
  },
)

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: Navigator,
}))
