import {colors} from '@app/constants/Theme';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {scale} from 'react-native-size-matters';
import moment from 'moment';
import ScreenComponent from '@app/components/ScreenComponent';
import NavigationUtil from '@app/navigation/NavigationUtil';
import SCREEN_ROUTER from '@app/constants/Constant';
import R from '@app/assets/R';
// import PropTypes from 'prop-types';

const CalenderBookingScreen = (props) => {
  const [dateSeleced, setDateSeleced] = useState(moment().format('YYYY-MM-DD'));
  const [timeShow, setTimeShow] = useState([]);

  const dateStart = moment().format('YYYY-MM-DD');
  const dateEnd = moment().add(7, 'days').format('YYYY-MM-DD');
  const dataMovie = props.navigation.getParam('params') || null;

  const handleSelected = (al) => {
    setDateSeleced(moment(al).format('YYYY-MM-DD'));
  };
  useEffect(() => {
    let arrTime = [];
    dataMovie?.showTime.map((el) => {
      let elStr = el.replace(/ /g, '-');
      moment(elStr, 'YYYY-MM-DD, HH:ss')
        .format('YYYY-MM-DD, HH:ss')
        .split(', ')[0] == dateSeleced && arrTime.push(elStr);
      setTimeShow(arrTime);
    });
  }, [dateSeleced]);
  const renderTimeShow = () => {
    return (
      <View style={timeShow.length !== 0 ? styles.vTimeShow : {}}>
        {timeShow.length === 0 ? (
          <View style={styles.vEmpty}>
            <Image source={R.images.broke} style={styles.iconEmpty} />
            <Text style={styles.txtEmpty}>Không có suất chiếu nào!</Text>
          </View>
        ) : (
          timeShow.map((el, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.vTime}
                onPress={() =>
                  NavigationUtil.navigate(SCREEN_ROUTER.BOOKING_SCREEN, {
                    params: dataMovie,
                    time: moment(el, 'YYYY-MM-DD, HH:ss').format('HH:ss'),
                  })
                }>
                <Text style={styles.txtTime}>
                  {moment(el, 'YYYY-MM-DD, HH:ss').format('HH:ss')}
                </Text>
              </TouchableOpacity>
            );
          })
        )}
      </View>
    );
  };
  return (
    <ScreenComponent
      titleHeader={dataMovie?.name}
      back
      disableScrollView={true}
      renderView={
        <View style={styles.container}>
          <CalendarStrip
            scrollable
            daySelectionAnimation={{
              type: 'border',
              duration: 200,
              borderWidth: 1.5,
              borderHighlightColor: colors.yellow,
            }}
            style={{height: scale(90), paddingTop: scale(10)}}
            calendarColor={colors.blueCalender}
            calendarHeaderStyle={{color: colors.white}}
            dateNumberStyle={{color: colors.white}}
            dateNameStyle={{color: colors.white}}
            highlightDateNumberStyle={{color: colors.yellow}}
            highlightDateNameStyle={{color: colors.yellow}}
            minDate={dateStart}
            maxDate={dateEnd}
            onDateSelected={handleSelected}
            selectedDate={moment().format('YYYY-MM-DD')}
          />
          <View>{renderTimeShow()}</View>
        </View>
      }
    />
  );
};

// CalenderBookingScreen.propTypes = {
//   params: PropTypes.object,
// };

// CalenderBookingScreen.defaultProps = {
//   params: {},
// };
export default CalenderBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vEmpty: {
    alignItems: 'center',
    marginTop: scale(50),
  },
  iconEmpty: {
    width: scale(140),
    height: scale(140),
  },
  txtEmpty: {
    marginTop: scale(10),
    fontSize: 16,
    fontWeight: '500',
    color: colors.active,
  },
  txtTime: {
    fontWeight: '600',
    color: colors.grey,
  },
  vTime: {
    width: scale(50),
    height: scale(20),
    borderWidth: 1.3,
    borderColor: colors.greySeat,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.white,
    margin: scale(10),
    // marginTop : scale(5)
  },
  vTimeShow: {
    flexDirection: 'row',
  },
});
