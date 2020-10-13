import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';
import {scale, verticalScale} from 'react-native-size-matters';
import TextPrice from './TextPrice';
import R from '@app/assets/R';
import {colors} from '@app/constants/Theme';
import {IconStar} from '@app/assets/svg/svg';

const ItemFood = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.itemContainer}>
      {item.discount ? (
        <View style={styles.position}>
          <Image style={styles.discount} source={R.images.ic_discount} />
          <Text style={styles.txtDis}>{item.discount}%</Text>
        </View>
      ) : null}
      <Card style={styles.card}>
        <Image style={styles.itemImg} source={{uri: item?.photo}} />
        <View style={styles.infoContainer}>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={styles.flexRowJustifi}>
            <TextPrice style={styles.txtPrice} price={`${item.price} đ`} />
            {item.rating ? (
              <View style={styles.flexRow}>
                <Text style={styles.txtRating}>{item?.rating}</Text>
                <IconStar />
              </View>
            ) : null}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

ItemFood.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

ItemFood.defaultProps = {
  item: {},
  onPress: () => {},
};
export default ItemFood;

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: scale(5),
    marginBottom: verticalScale(7),
  },
  card: {
    width: scale(150),
    height: scale(210),
    borderRadius: scale(5),
    paddingHorizontal: scale(0),
  },
  itemImg: {
    flex: 1,
    // width: null,
    // height: scale(150),
    borderTopRightRadius: scale(5),
    borderTopLeftRadius: scale(5),
  },
  discount: {
    width: scale(22),
    height: scale(39),
  },
  position: {
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'flex-end',
  },
  txtDis: {
    position: 'absolute',
    fontSize: 10,
    alignSelf: 'center',
    height: scale(39),
    marginTop: scale(8),
    color: colors.white,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowJustifi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    padding: scale(5),
  },
  txtPrice: {
    fontWeight: '500',
    color: colors.tomato,
  },
  txtName: {
    fontWeight: '500',
  },
  txtRating: {
    marginRight: scale(3),
    fontWeight: '500',
  },
});
