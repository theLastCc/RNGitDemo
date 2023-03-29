import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import homePage from './page/homePage';
import page1 from './page/page1';
import page2 from './page/page2';
import page3 from './page/page3';

const topTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: page1,
      navigationOptions: {
        tabBarLabel: 'Page10',
      },
    },
    Page2: {
      screen: page2,
      navigationOptions: {
        tabBarLabel: 'Page2',
      },
    },
    Page3: {
      screen: page3,
      navigationOptions: {
        tabBarLabel: 'Page2',
      },
    },
    Page4: {
      screen: page1,
      navigationOptions: {
        tabBarLabel: 'Page2',
      },
    },
  },
  {
    tabBarOptions: {
      tabStyle: {
        minWidth: 50,
      },
      scrollEnabled: true,
      style: {
        backgroundColor: 'red', //TabBar 的背景颜色
      },
    },
  },
);

const bottomTabNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: page1,
      navigationOptions: {
        tabBarLabel: 'Page1',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-battery-full' : 'ios-battery-dead'}
            size={26}
          />
        ),
      },
    },
    Page2: {
      screen: page2,
      navigationOptions: {
        tabBarLabel: 'Page2',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
            size={26}
          />
        ),
      },
    },
    page3: {
      screen: page3,
      navigationOptions: {
        tabBarLabel: 'Page3',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
            size={26}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {},
  },
);

const appNavigator = createStackNavigator(
  {
    homePage: {
      screen: homePage,
    },
    page1: {
      screen: page1,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
    page2: {
      screen: page2,
      navigationOptions: {
        //在这里定义每个页面的导航属性，静态配置
        title: '页面的标题',
      },
    },
    page3: {
      screen: page3,
      navigationOptions: (props) => {
        const {navigation} = props;
        const {state, setParams} = navigation;
        const {params} = state;

        return {
          title: params.title ? params.title : 'This is Page3',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? '保存' : '编辑'}
              onPress={() =>
                setParams({mode: params.mode === 'edit' ? '' : 'edit'})
              }
            />
          ),
        };
      },
    },
    bottomTabNavigator: {
      screen: bottomTabNavigator,
      navigationOptions: {
        //在这里定义每个页面的导航属性，静态配置
        title: '底部',
      },
    },
    topTabNavigator: {
      screen: topTabNavigator,
      navigationOptions: {
        title: '顶部',
      },
    },
  },
  {
    defaultNavigationOptions: {
      // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
  },
);

export default appNavigator;
