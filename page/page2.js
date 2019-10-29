import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class page2 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>page2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});
