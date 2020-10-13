import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import {scale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');
const ItemNotifications = (props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image style={styles.img} source={{uri: item?.imgPath}} />
        <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.txtTitle}>
          {item.title}
        </Text>
      </Card>
    </View>
  );
};
ItemNotifications.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

ItemNotifications.defaultProps = {
  item: {},
  onPress: () => {},
};
export default ItemNotifications;

const styles = StyleSheet.create({
  img: {
    width: scale(120),
    borderTopLeftRadius: scale(5),
    borderBottomLeftRadius: scale(5),
  },
  card: {
    height: scale(120),
    borderRadius: scale(5),
    paddingHorizontal: scale(0),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    marginVertical: scale(5),
  },
  txtTitle: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: scale(10),
  },
});
