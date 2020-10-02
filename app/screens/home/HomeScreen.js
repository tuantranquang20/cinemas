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
  Button
} from 'react-native';
import {getHomeRequest} from '../../redux/actions/index';
import Carousel from 'react-native-snap-carousel';
import RNHeader from '../../components/RNHeader';
import {IconTicket, IconHamburger} from '@app/assets/svg/svg';
import {scale, verticalScale} from 'react-native-size-matters';
import R from '@app/assets/R';

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
        <TouchableOpacity>
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
        <Text style={styles.txtStatus}>{R.strings.showing}</Text>
        <Text style={styles.txtStatus}>{R.strings.will_show}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={{uri: dataHome?.data?.data?.movies[state.indexItem].imgPath}}
      style={styles.imgBackground}
      blurRadius={10}>
      <View style={{alignItems: 'center'}}>
        <RNHeader rightButton={rightHeader()} />
        <ScrollView>
          {renderStatusMovies()}
          <Carousel
            layout={'default'}
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
          <TouchableOpacity
            onPress={() => {
              dispatch({type: 'server/hello'});
            }}
          >
            <Text>Join</Text>
            </TouchableOpacity>
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
    backgroundColor: 'dodgerblue',
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
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtStatus: {
    width: width / 2,
    textAlign: 'center',
  },
  imgBackground: {
    width,
    height,
  },
});
