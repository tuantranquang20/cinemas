import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenComponent from '@app/components/ScreenComponent';
import Fire from '@app/constants/FirebaseConfig';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

//lấy được id của người chat, sau đó vào db để lôi ra những thông tin cần thiết ?????
//cú lừa nhỉ ? vì khá là khó, lại phải search ? hình như chưa viết api search :33
// ý tưởng :  đầu tiên phải lấy đc thằng user đó là thằng nào, sau đó thì bắt đầu gọi lên firebase
//để tìm list_chat sau đó mới gọi đến server để abc xyz
const RoomScreen = () => {
  const [userReceiver, setUserReceiver] = useState([]);
  const getListChatRoom = async () => {
    // Fire.shared.on(2, (listChatRoom) => {
    //   listChatRoom?.list_chat?.map((el, index) => {
    //     setUserReceiver(oldState=> [...oldState, index]);
    //   });
    // });
    const userAppString = await AsyncStorage.getItem('USER_APP');
    const userAppParse = JSON.parse(userAppString);
    Fire.shared.on(userAppParse?.userID, (listChatRoom) => {
      // listChatRoom?.list_chat?.map((el, index) => {
      //   setUserReceiver(oldState=> [...oldState, index]);
      // });
    });
  };
  useEffect(() => {
    getListChatRoom();
  }, []);
  const renderBody = () => {
    return <></>;
  };
  return (
    <ScreenComponent
      titleHeader={'Chat'}
      disableScrollView={true}
      renderView={renderBody()}
    />
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
