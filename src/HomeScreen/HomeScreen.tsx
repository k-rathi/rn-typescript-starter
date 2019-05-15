import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {navigation: {navigate: Function } };
type State = {};
export default class HomeScreen extends Component<Props, State> {
  moveToSecond = () => {
    this.props.navigation.navigate('Second');
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}> Home Screen </Text>
        <Button
          title='Go to Second Screen'
          onPress={this.moveToSecond}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
