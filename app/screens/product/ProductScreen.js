import ItemFood from '@app/components/ItemFood';
import ScreenComponent from '@app/components/ScreenComponent';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {productRequest} from '@app/redux/actions/index';
import {scale, verticalScale} from 'react-native-size-matters';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.productReducer);
  const userFBReducer = useSelector((state) => state.userFBReducer);
  console.log(userFBReducer, 'aaa');
  const renderItemProduct = ({item}) => {
    return <ItemFood item={item} containerStyle={styles.item} />;
  };
  const renderProduct = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={dataProduct?.data}
        numColumns={2}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItemProduct}
      />
    );
  };
  useEffect(() => {
    dispatch(productRequest({}));
  }, []);
  return (
    <ScreenComponent
      titleHeader={'Sản phẩm'}
      disableScrollView={true}
      renderView={<View style={styles.container}>{renderProduct()}</View>}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    // marginTop: scale(10),
  },
  item: {
    marginHorizontal: scale(0),
    marginVertical: verticalScale(5),
  },
});
