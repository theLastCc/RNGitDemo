import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>page1</Text>
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
