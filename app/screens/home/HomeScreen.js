import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {getHomeRequest} from '../../redux/actions/index';
import Carousel from 'react-native-snap-carousel';
import RNHeader from '../../components/RNHeader';
import {IconTicket, IconHamburger} from '@app/assets/svg/svg';
import {scale, verticalScale} from 'react-native-size-matters';
import R from '@app/assets/R';
import {colors} from '@app/constants/Theme';
import ItemFood from '@app/components/ItemFood';
import reactotron from 'reactotron-react-native';
import ItemNotifications from '@app/components/ItemNotifications';
import NavigationUtil from '@app/navigation/NavigationUtil';
import SCREEN_ROUTER from '@constant';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [state, setState] = useState({
    show: true,
    indexItem: 0,
  });
  const dispatch = useDispatch();
  const dataHome = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getHomeRequest());
  }, []);
  //api user
  useEffect(() => {}, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{uri: item.imgPath}} style={styles.carouselImg} />
      </TouchableOpacity>
    );
  };
  const rightHeader = () => {
    return (
      <View style={styles.btnRightHeader}>
        <TouchableOpacity
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER.VOUCHER);
          }}>
          <IconTicket style={styles.ticket} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconHamburger />
        </TouchableOpacity>
      </View>
    );
  };
  const renderStatusMovies = () => {
    return (
      <View style={styles.statusMovies}>
        <TouchableOpacity>
          <Text style={styles.txtStatus}>{R.strings.showing}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txtStatus}>{R.strings.will_show}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderDescriptionMovies = () => {
    const {data} = dataHome?.data;
    return (
      <View style={styles.containerDes}>
        <View>
          <Text style={styles.txtWhite}>
            {data?.movies[state.indexItem]?.name.toUpperCase()}
          </Text>
          <Text style={styles.txtWhite}>
            {Math.floor(data?.movies[state.indexItem]?.timeMovies / 60)} giờ{' '}
            {Math.ceil(
              (data?.movies[state.indexItem]?.timeMovies / 60 -
                Math.floor(data?.movies[state.indexItem]?.timeMovies / 60)) *
                60,
            )}{' '}
            phút
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnBook}
          onPress={() =>
            NavigationUtil.navigate(SCREEN_ROUTER.CALENDER_BOOKING, {
              params: data?.movies[state.indexItem],
            })
          }>
          <Text style={styles.txtBook}>Đặt vé</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItemProduct = ({item}) => {
    return <ItemFood item={item} onPress={() => console.log('Press')} />;
  };
  const renderProduct = () => {
    const {data} = dataHome?.data;
    return (
      <View style={styles.containerProduct}>
        <View style={styles.viewProduct}>
          <Text style={styles.txtWhite}>SẢN PHẨM</Text>
          <TouchableOpacity
            onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.PRODUCT)}>
            <Text style={styles.txtWhite}>Tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data?.products}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItemProduct}
        />
      </View>
    );
  };
  const renderItemNotification = ({item}) => {
    return <ItemNotifications item={item} />;
  };
  const renderNotification = () => {
    const {data} = dataHome?.data;
    return (
      <View style={styles.containerProduct}>
        <View style={styles.viewProduct}>
          <Text style={styles.txtWhite}>TIN MỚI</Text>
          <TouchableOpacity
            onPress={() => NavigationUtil.navigate(SCREEN_ROUTER.NOTIFiCATION)}>
            <Text style={styles.txtWhite}>Tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data?.notifications}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItemNotification}
        />
      </View>
    );
  };

  const leftHeader = () => {
    return (
      <View style={[styles.leftHeader, {backgroundColor: colors.primary}]}>
        <Image style={styles.leftHeader} source={R.images.ic_user} />
      </View>
    );
  };
  return (
    <ImageBackground
      source={{uri: dataHome?.data?.data?.movies[state.indexItem].imgPath}}
      style={styles.imgBackground}
      blurRadius={10}>
      <View style={{alignItems: 'center'}}>
        <RNHeader
          rightButton={rightHeader()}
          leftButton={leftHeader()}
          leftPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER.USER);
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{marginBottom: scale(180)}}>
          {renderStatusMovies()}
          <Carousel
            layout={'default'}
            bounces={false}
            // ref={(ref) => (carousel = ref)}
            data={dataHome?.data?.data?.movies || null}
            sliderWidth={width}
            itemWidth={scale(270)}
            renderItem={renderItem}
            useScrollView={true}
            loop={true}
            inactiveSlideShift={0}
            onSnapToItem={(index) => setState({...state, indexItem: index})}
          />
          {renderDescriptionMovies()}
          {renderProduct()}
          {renderNotification()}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: scale(270),
    height: scale(400),
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImg: {
    width: scale(270),
    height: scale(400),
  },
  btnRightHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: verticalScale(5),
  },
  ticket: {
    marginRight: scale(20),
  },
  statusMovies: {
    minHeight: verticalScale(40),
    width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blueOpacity,
    marginBottom: verticalScale(5),
  },
  txtStatus: {
    width: width / 2,
    textAlign: 'center',
    color: colors.white,
    fontSize: scale(15),
  },
  imgBackground: {
    width,
    height,
  },
  containerDes: {
    minHeight: scale(40),
    width,
    backgroundColor: colors.blueOpacity,
    marginVertical: verticalScale(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  containerProduct: {
    minHeight: scale(40),
    width,
    backgroundColor: colors.blueOpacity,
    marginVertical: verticalScale(5),
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  btnBook: {
    width: scale(50),
    height: scale(25),
    backgroundColor: colors.red,
    borderRadius: scale(25),
    justifyContent: 'center',
  },
  txtBook: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  txtWhite: {
    color: colors.white,
    fontWeight: '500',
  },
  viewProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(7),
  },
  leftHeader: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(25),
  },
});
