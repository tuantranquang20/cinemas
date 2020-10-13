import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import theme from '@app/constants/Theme';
import {StyleSheet} from 'react-native';
export default function Loading() {
  const {color} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <BarIndicator color={color || theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  textLoading: {
    fontSize: 13,
  },
});
