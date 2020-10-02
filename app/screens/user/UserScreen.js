import React, {useEffect, useRef, useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';

const UserScreen = () => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.current = io('http://192.168.1.74:3001');
    socket.current.on('message', (message) => {
      setMessages((preState) => GiftedChat.append(preState, message));
    });
  }, []);
  useEffect(() => {
    const userId = Math.floor(Math.random() * 100) + 1;
    socket.current.emit('join', userId);
  }, []);
  const onSend = (messages) => {
    socket.current.emit('message', messages[0].text);
    setMessages((preState) => {
      return GiftedChat.append(preState, messages); //này là cái append nó tự động đc thêm vào đầu của mảng [0]
    });
  };
  return (
    <GiftedChat
      // renderUsernameOnMessage
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
