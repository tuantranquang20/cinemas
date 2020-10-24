import {colors} from '@app/constants/Theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {scale} from 'react-native-size-matters';
const CalenderBookingScreen = () => {
  const date = new Date();
  return (
    <View>
      <CalendarStrip
        scrollable
        style={{height: scale(100), paddingTop: 50, paddingBottom: 10}}
        calendarColor={colors.active}
        showMonth={false}
        calendarHeaderStyle={{color: colors.white}}
        dateNumberStyle={{color: colors.white}}
        dateNameStyle={{color: colors.white}}
        highlightDateNumberStyle={{color: colors.yellow}}
        highlightDateNameStyle={{color: colors.yellow}}
        minDate={`${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`}
        maxDate={`${date.getFullYear()}-${date.getMonth() + 1}-${
          date.getDate() + 7
        }`}
        onDateSelected={(el) => console.log(el.format())}
        selectedDate={`${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`}
      />
    </View>
  );
};

export default CalenderBookingScreen;

const styles = StyleSheet.create({});
