import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from 'react';
import {Button} from 'react-native';
import homePage from './page/homePage';
import page1 from './page/page1';
import page2 from './page/page2';
import page3 from './page/page3';

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
      navigationOptions: props => {
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
  },
  {
    defaultNavigationOptions: {
      // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
  },
);

export default appNavigator;
