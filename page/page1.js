import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class page1 extends Component {
  //也可在这里定义每个页面的导航属性，这里的定义会覆盖掉别处的定义
  // static navigationOptions = {
  //     title: 'Page1111',
  // };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>page1</Text>

        <Button
          title="改变主题色"
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'orange',
                updateTime: new Date().getTime(),
              },
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
