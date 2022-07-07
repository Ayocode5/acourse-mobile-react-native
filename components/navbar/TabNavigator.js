import React from 'react';
import Home from '../pages/Home';
import MyClass from '../pages/MyClass';
import Cart from '../pages/Cart';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import colors from '../../assets/colors/colors';

import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.darkGrey,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_home_active.png')
                      : require('../../assets/images/nav_home.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Class"
        component={MyClass}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_my_class_active.png')
                      : require('../../assets/images/nav_my_class.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_cart_active.png')
                      : require('../../assets/images/nav_cart.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_notif_active.png')
                      : require('../../assets/images/nav_notif.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={
                    focused
                      ? require('../../assets/images/nav_profile_active.png')
                      : require('../../assets/images/nav_profile.png')
                  }
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
