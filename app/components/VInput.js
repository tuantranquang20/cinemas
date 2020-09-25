import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class VInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {inputStyle} = this.props;
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          style={[styles.container, inputStyle]}
          placeholder="Where are you go?"
        />
      </View>
    );
  }
}

export default VInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 50,
    padding: 5,
    backgroundColor: 'white',
  },
});
