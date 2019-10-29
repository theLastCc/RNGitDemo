import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class page3 extends Component {
  render() {
    const {navigation} = this.props;
    const {state, setParams} = navigation;
    const {params} = state;
    // debugger
    const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View>
        <Text style={styles.textStyle}>page3</Text>
        <Text style={styles.showText}>{showText}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            setParams({title: text});
          }}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    marginTop: 10,
  },
});