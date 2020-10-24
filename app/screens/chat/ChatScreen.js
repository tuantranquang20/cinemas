import React, {useEffect, useRef, useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '@app/constants/FirebaseConfig';
import AsyncStorage from '@react-native-community/async-storage';
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState([]);

  // useEffect(async () => {
  // socket.current = io('http://192.168.1.74:3001');
  // socket.current.on('message', (message) => {
  //   setMessages((preState) => GiftedChat.append(preState, message));
  // });
  //   try {
  //     // const userId = AsyncStorage.
  //   } catch (error) {

  //   }
  // }, []);
  // useEffect(() => {
  //   const userId = Math.floor(Math.random() * 100) + 1;
  //   socket.current.emit('join', userId);
  // }, []);
  // const onSend = (messages) => {
  //   socket.current.emit('message', messages[0].text);
  //   setMessages((preState) => {
  //     return GiftedChat.append(preState, messages); //này là cái append nó tự động đc thêm vào đầu của mảng [0]
  //   });
  // };
  return (
    <GiftedChat
      // renderUsernameOnMessage
      messages={messages}
      onSend={Fire.shared.send(
        '5f2675c4ba7b5a13e98f8aea',
        '5f2e90392fae600b7ed3fc33',
      )}
      user={{
        _id: '5f2675c4ba7b5a13e98f8aea',
        name:"admin"
      }}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
