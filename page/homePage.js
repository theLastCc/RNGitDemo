import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class homePage extends Component {
    //在这里定义每个页面的导航属性
    static navigationOptions = {
        title: 'Home',
        headerBackTitle: '返回哈哈', //设置返回此页面的返回按钮文案，有长度限制
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Button
                    title={'page1'}
                    onPress={() => {
                        navigation.navigate('page1', {name: '动态的name1'});
                    }}/>
                <Button
                    title={'page2'}
                    onPress={() => {
                        navigation.navigate('page2');
                    }}/>
                <Button
                    title={'page3'}
                    onPress={() => {
                        navigation.navigate('page3', {});
                    }}/>
                <Button title={'page4'} onPress={() => {
                    navigation.navigate('bottomTabNavigator');
                }}/>
                <Button title={'page5'} onPress={() => {
                    navigation.navigate('topTabNavigator');
                }}/>
            </View>
        );
    }
}
