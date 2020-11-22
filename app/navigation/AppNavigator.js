import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import HomeScreen from '@app/screens/home/HomeScreen';
import CalenderBookingScreen from '@app/screens/home/booking/CalenderBookingScreen';
import UserScreen from '@app/screens/user/UserScreen';
import NotificationScreen from '@app/screens/notification/NotificationScreen';
import ProductScreen from '@app/screens/product/ProductScreen';
import VoucherScreen from '@app/screens/voucher/VoucherScreen';
import BookingScreen from '@app/screens/home/booking/BookingScreen';
import ChatScreen from '@app/screens/chat/ChatScreen';
import RoomScreen from '@app/screens/chat/RoomScreen';

import SCREEN_ROUTER from '@constant';
import R from '@R';
import * as theme from '@theme';

import {Image, Text} from 'react-native';
import reactotron from 'reactotron-react-native';
import {scale} from 'react-native-size-matters';
const TabBarComponent = (props) => <BottomTabBar {...props} />;

const Auth = createStackNavigator(
  {
    [SCREEN_ROUTER.LOGIN]: LoginScreen,
    [SCREEN_ROUTER.REGISTER]: RegisterScreen,
    [SCREEN_ROUTER.FORGOT_PASS]: ForgotPasswordScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  },
);

const tabbarIcons = {
  [SCREEN_ROUTER.PRODUCT]: R.images.icon_product,
  [SCREEN_ROUTER.VOUCHER]: R.images.icon_voucher,
  [SCREEN_ROUTER.HOME]: R.images.home,
  [SCREEN_ROUTER.NOTIFiCATION]: R.images.icon_notification,
  [SCREEN_ROUTER.USER]: R.images.icon_user,
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
const BottomTab = createBottomTabNavigator(
  {
    [SCREEN_ROUTER.PRODUCT]: {
      screen: ProductScreen,
      title: R.strings.product,
      navigationOptions: {
        tabBarLabel: R.strings.product,
      },
    },
    [SCREEN_ROUTER.VOUCHER]: {
      screen: VoucherScreen,
      title: R.strings.voucher,
      navigationOptions: {
        tabBarLabel: R.strings.voucher,
      },
    },
    [SCREEN_ROUTER.HOME]: {
      screen: HomeScreen,
      title: R.strings.home,
      navigationOptions: {
        tabBarLabel: () => {
          return (
            <>
              <Image
                source={R.images.icon_home}
                style={
                  theme.dimension.width > 365
                    ? {
                        width: scale(65),
                        height: scale(65),
                      }
                    : {
                        width: scale(60),
                        height: scale(60),
                      }
                }
              />
              <Text>{R.strings.home}</Text>
            </>
          );
        },
      },
    },
    [SCREEN_ROUTER.NOTIFiCATION]: {
      screen: NotificationScreen,
      title: R.strings.user,
      navigationOptions: {
        tabBarLabel: R.strings.notification,
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
      inactiveTintColor: theme.colors.primaryDark1,
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

const Main = createStackNavigator(
  {
    [SCREEN_ROUTER.BOTTOM_BAR]: BottomTab,
    [SCREEN_ROUTER.USER]: UserScreen,
    [SCREEN_ROUTER.CALENDER_BOOKING]: CalenderBookingScreen,
    [SCREEN_ROUTER.BOOKING_SCREEN]: BookingScreen,
    [SCREEN_ROUTER.CHAT_SCREEN]: ChatScreen,
    [SCREEN_ROUTER.ROOM_SCREEN]: RoomScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
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
      initialRouteName: SCREEN_ROUTER.AUTH_LOADING,
    },
  ),
);
