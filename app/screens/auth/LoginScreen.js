import R from '@app/assets/R';
import {ForgotPass, IconFB, IconGG} from '@app/assets/svg/svg';
import Button from '@app/components/Button';
import Card from '@app/components/Card';
import ScreenComponent from '@app/components/ScreenComponent';
import VInput from '@app/components/VInput';
import {colors} from '@app/constants/Theme';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

function LoginScreen() {
  const [state, setState] = useState({});
  const renderLogin = () => {
    return (
      <Card style={styles.card}>
        <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
        <VInput
          value={'0367173691'}
          inputStyle={styles.input}
          placeholder={'Số điện thoại'}
        />
        <VInput
          value={'tuan1234'}
          inputStyle={styles.input}
          placeholder={'Mật khẩu'}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <ForgotPass style={styles.forgotPass} />
        </TouchableOpacity>
        <Button title={'Đăng nhập'} />
      </Card>
    );
  };
  const renderSignUp = () => {
    return (
      <TouchableOpacity style={styles.vSignup}>
        <Text style={styles.txtSign}>Chưa có tài khoản? </Text>
        <Text style={styles.txtSignup}>Đăng ký</Text>
      </TouchableOpacity>
    );
  };
  const renderSignInGGAndFb = () => {
    return (
      <View style={styles.flexRow}>
        <TouchableOpacity>
          <Image source={R.images.ic_fb} style={styles.icFB} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconGG />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenComponent
      // bgColor={colors.white}
      disableScrollView={true}
      renderView={
        <View style={styles.container}>
          {renderLogin()}
          {renderSignUp()}
          {renderSignInGGAndFb()}
        </View>
      }
    />
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center"
  },
  card: {
    marginHorizontal: scale(5),
    borderRadius: 10,
    minHeight: scale(345),
  },
  input: {
    backgroundColor: colors.primary,
    borderRadius: scale(5),
    padding : scale(5),
    marginVertical: scale(15),
  },
  txtLogin: {
    textAlign: 'center',
    marginVertical: scale(35),
    fontSize: scale(15),
    fontWeight: '500',
    color: colors.blue,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(5),
  },
  vSignup: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  txtSign: {
    fontWeight: '500',
    color: colors.gray,
  },
  txtSignup: {
    fontWeight: '500',
    color: colors.tomato,
  },
  flexRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  icFB: {
    width: 84,
    height: 84,
  },
});
