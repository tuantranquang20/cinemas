import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '@app/constants/FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';
import R from '@app/assets/R';
import {scale} from 'react-native-size-matters';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const ChatScreen = (props) => {
  const userParams = props.navigation.getParam('params');
  // const userFB = useSelector((state) => state.userFBReducer);
  const userApp = useSelector((state) => state.loginReducer);
  console.log(userParams.userID, 'app');
  const [messages, setMessages] = useState([]);
  // const [user, setUser] = useState({});
  // const userAppState = isEmpty(userApp.data)
  //   ?
  //   : userApp.data?.user;

  // (preState) => {
  //   return GiftedChat.append(preState, message?.data);
  // }
  // console.log(userParams);
  useEffect(() => {
    Fire.shared.getConversation(
      userParams?.userID,
      userParams.userID == 2 ? 3 : 2,
      (message) => {
        setMessages(message?.data);
      },
    );
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    Fire.shared.send(
      userParams.userID, //ng gửi
      userParams.userID == 2 ? 3 : 2, //ng nhận, mặc định là admin đi
    )(messages);
  }, []);
  return (
    <GiftedChat
      placeholder="Nhập tin nhắn ..."
      messages={messages}
      inverted={false}
      timeFormat="HH:mm:ss"
      dateFormat="DD/MM/YYYY"
      onSend={onSend}
      user={{
        avatar: userParams.avatar,
        name: userParams.name,
        _id: userParams.userID, //thằng hiện tại đăng nhập vào
      }}
      renderActions={() => (
        <TouchableOpacity
          style={{
            width: 40,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
          }}
          onPress={() => {}}>
          <Image
            resizeMode="contain"
            style={{height: scale(30), width: scale(30)}}
            source={R.images.ic_pick_image}
          />
        </TouchableOpacity>
      )}
      // renderChatFooter={() =>
      //     <View>
      //         {this.state.isImageUploading &&
      //             <LottieView
      //                 style={{ height: 3, width: theme.dimension.width }}
      //                 source={require("../../assets/anims/progress_uploading.json")}
      //                 autoPlay
      //                 loop
      //                 resizeMode={'cover'}
      //             />}
      //     </View>}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
