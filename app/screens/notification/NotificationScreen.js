import R from '@app/assets/R';
import ScreenComponent from '@app/components/ScreenComponent';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
const isEmpty = true;
const NotificationScreen = () => {
  const renderBody = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.imgNoti} source={R.images.ic_noti} />
        <Text style={styles.txtEmpty}>Bạn chưa có thông báo nào</Text>
      </View>
    );
  };
  return (
    <ScreenComponent
      titleHeader={'Thông báo'}
      disableScrollView={isEmpty}
      renderView={<>{isEmpty && renderBody()}</>}
    />
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  txtEmpty: {
    fontSize: scale(14),
    fontWeight: '500',
    marginTop: verticalScale(10),
    // textAlign: 'center',R
    marginLeft: scale(10),
  },
  imgNoti: {
    width: scale(120),
    height: scale(140),
  },
});
