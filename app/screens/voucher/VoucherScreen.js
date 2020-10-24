import R from '@app/assets/R';
import ScreenComponent from '@app/components/ScreenComponent';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
const isEmpty = true;
const VoucherScreen = () => {
  const renderBody = () => {
    return (
      <View style={styles.container}>
        <Image source={R.images.ic_cart_empty} />
        <Text style={styles.txtEmpty}>Bạn chưa có Voucher nào</Text>
      </View>
    );
  };
  const rightBtn = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Create Voucher');
        }}>
        <Image style={styles.iconAdd} source={R.images.icon_add} />
      </TouchableOpacity>
    );
  };
  return (
    <ScreenComponent
      titleHeader={'Voucher'}
      disableScrollView={isEmpty}
      rightButton={rightBtn()}
      renderView={<>{isEmpty && renderBody()}</>}
    />
  );
};

export default VoucherScreen;

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
  iconAdd: {
    width: scale(20),
    height: scale(20),
  },
});
