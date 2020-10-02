import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import HomeScreen from '@app/screens/home/HomeScreen';
import UserScreen from '@app/screens/user/UserScreen';
import SCREEN_ROUTER from '@constant';
import R from '@R';
import * as theme from '@theme';

import {Image} from 'react-native';
const TabBarComponent = (props) => <BottomTabBar {...props} />;

const Auth = createStackNavigator({
  [SCREEN_ROUTER.LOGIN]: LoginScreen,
  [SCREEN_ROUTER.REGISTER]: RegisterScreen,
  [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen,
});

//Nâng React navigation lên v5
const tabbarIcons = {
  [SCREEN_ROUTER.HOME]: R.images.home,
  [SCREEN_ROUTER.PRODUCT]: R.images.Tv,
  [SCREEN_ROUTER.POINT]: R.images.gift,
  [SCREEN_ROUTER.NOTIFiCATION]: R.images.ring,
  [SCREEN_ROUTER.USER]: R.images.user,
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.home;
  const iconSize = focused ? 27 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{tintColor: tintColor, width: iconSize, height: iconSize}}
    />
  );
};

const Main = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      title: R.strings.home,
      navigationOptions: {
        tabBarLabel: R.strings.home,
      },
    },
    [SCREEN_ROUTER.USER]: {
      screen: UserScreen,
      title: R.strings.user,
      navigationOptions: {
        tabBarLabel: R.strings.user,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeBackgroundColor: theme.colors.bottombarBg,
      inactiveBackgroundColor: theme.colors.bottombarBg,
      inactiveTintColor: theme.colors.inactive,
      activeTintColor: theme.colors.active,
    },
    // cái này là custom cái tabbar bên dưới
    tabBarComponent: (props) => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: theme.colors.borderTopColor,
            backgroundColor: theme.colors.primary,
            height: 58,
          }}
        />
      );
    },
    initialRouteName: SCREEN_ROUTER.HOME,
  },
);
// var TopNavigation = createStackNavigator(createMaterialTopTabNavigator({
//     [SCREEN_ROUTER.TAB_1] : 'Home',
//     [SCREEN_ROUTER.TAB_2] : 'Product' ,
//     [SCREEN_ROUTER.TAB_3] : 'User'
// })
//đây là phần switch
export default createAppContainer(
  createSwitchNavigator(
    {
      [SCREEN_ROUTER.AUTH_LOADING]: AuthLoadingScreen,
      [SCREEN_ROUTER.AUTH]: Auth,
      [SCREEN_ROUTER.MAIN]: Main,
    },
    {
      initialRouteName: SCREEN_ROUTER.MAIN,
    },
  ),
);
