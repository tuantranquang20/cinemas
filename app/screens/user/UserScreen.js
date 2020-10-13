import R from '@app/assets/R';
import Card from '@app/components/Card';
import FormUser from '@app/components/FormUser';
import ScreenComponent from '@app/components/ScreenComponent';
import {colors} from '@app/constants/Theme';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';

const action = [
  {
    img: R.images.ic_profile,
    title: 'Thông tin tài khoản',
    screen: '',
  },
  {
    img: R.images.ic_update,
    title: 'Cập nhật tài khoản',
    screen: '',
  },
  {
    img: R.images.ic_role,
    title: 'Điều khoản sử dụng',
    screen: '',
  },
  {
    img: R.images.ic_qr,
    title: 'QR thanh toán',
    screen: '',
  },
  {
    img: R.images.ic_history,
    title: 'Lịch sử giao dịch',
    screen: '',
  },
];

const UserScreen = () => {
  const renderAvt = () => {
    return (
      <Card style={styles.headerAvt}>
        <View style={styles.flexRow}>
          <View style={styles.vAvt}>
            <Image
              style={styles.avt}
              source={{
                uri:
                  'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/31363286_584256105263011_7349413226481713152_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=U3OzpC-DmZQAX9yYD3I&_nc_ht=scontent.fhan2-3.fna&oh=bd4d2a95d50c33e9b47d1d0ddda8d30c&oe=5FA6E54A',
              }}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.txtName}>Tuấn trần</Text>
            <TouchableOpacity onPress={() => console.log('update user')}>
              <Text style={styles.txtUpdate}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );
  };
  const renderBodyAction = () => {
    return (
      <Card style={styles.bodyAction}>
        {action.map((el) => (
          <FormUser imagePath={el.img} title={el.title} />
        ))}
        <Text style={styles.logOut}>
          Đăng xuất 
        </Text>
      </Card>
    );
  };
  return (
    <ScreenComponent
      titleHeader={'Tài khoản'}
      bounces={false}
      bgColor={colors.white}
      renderView={
        <View>
          {renderAvt()}
          {renderBodyAction()}
        </View>
      }
    />
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  headerAvt: {
    marginTop: scale(5),
    minHeight: scale(75),
    justifyContent: 'center',
  },
  bodyAction: {
    marginTop: scale(5),
    justifyContent: 'center',
    paddingBottom: scale(5),
  },
  avt: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(35),
  },
  vAvt: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(35),
    backgroundColor: colors.primary,
  },
  flexRow: {
    flexDirection: 'row',
  },
  info: {
    marginLeft: scale(25),
    marginTop: scale(5),
  },
  txtName: {
    fontWeight: '500',
    fontSize: scale(17),
  },
  txtUpdate: {
    color: colors.gray,
    marginTop: scale(5),
  },
  logOut:{
    marginVertical : scale(15),
    color : colors.tomato,
    fontWeight : "500",
    fontSize : scale(15)
  }
});
