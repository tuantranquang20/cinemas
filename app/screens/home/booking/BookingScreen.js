import {IconSeat} from '@app/assets/svg/svg';
import ScreenComponent from '@app/components/ScreenComponent';
import {colors} from '@app/constants/Theme';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Svg, {G, Path} from 'react-native-svg';

const AR = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'];
const BR = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'];
const CR = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'];
const DR = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'];
const ER = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'];
const FR = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'];
const GR = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'];
const HR = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9'];
const statusSeat = [
  {colorSeat: colors.greyLight, stt: 'Ghế thường'},
  {colorSeat: colors.redDrank, stt: 'Ghế VIP'},
  {colorSeat: colors.green, stt: 'Đang chọn'},
  {colorSeat: colors.black, stt: 'Đã đặt'},
];

const BookingScreen = (props) => {
  // const [colorSeat, setColorSeat] = useState(colors.greyLight);
  const [arrSeat, setArrSeat] = useState([]);
  const dataMovie = props.navigation.getParam('params') || null;
  const time = props.navigation.getParam('time') || null;
  // console.log(dataMovie);
  function screenSeat(props) {
    return (
      <Svg
        width={scale(350)}
        height={scale(280)}
        viewBox="0 0 365 309"
        style={{marginTop: scale(50)}}
        {...props}>
        <G data-name="Group 1">
          <G data-name="Rectangle 9" fill={colors.grey} stroke="#707070">
            <Path stroke="none" d="M0 0h365v309H0z" />
            <Path fill="none" d="M.5.5h364v308H.5z" />
          </G>
          {AR.map((el, index) => (
            <IconSeat
              key={index}
              transSeatX={47 + index * 31}
              transTextX={50 + index * 31}
              transSeatY={20}
              transTextY={37}
              txt={el}
              colorSeat={colors.greyLight}
              index={index}
              onPress={() => {
                let newSeatTick = [];
                if (arrSeat?.includes(el)) {
                  newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                } else {
                  newSeatTick = [...arrSeat, el];
                }
                setArrSeat(newSeatTick);
              }}
              seatTick={arrSeat}
            />
          ))}
          {BR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={54}
                transTextY={71}
                txt={el}
                colorSeat={colors.greyLight}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {CR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={88}
                transTextY={105}
                txt={el}
                colorSeat={colors.redDrank}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {DR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={120}
                transTextY={137}
                txt={el}
                colorSeat={colors.redDrank}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {ER.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={153}
                transTextY={170}
                txt={el}
                colorSeat={colors.redDrank}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {FR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={183}
                transTextY={200}
                txt={el}
                colorSeat={colors.redDrank}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {GR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={218}
                transTextY={234}
                txt={el}
                colorSeat={colors.redDrank}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
          {HR.map((el, index) => {
            return (
              <IconSeat
                key={index}
                transSeatX={47 + index * 31}
                transTextX={50 + index * 31}
                transSeatY={250}
                transTextY={267}
                txt={el}
                colorSeat={colors.greyLight}
                index={index}
                onPress={() => {
                  let newSeatTick = [];
                  if (arrSeat?.includes(el)) {
                    newSeatTick = [...arrSeat?.filter((e) => e !== el)]; //trả về mảng mới có các phần tử khác el
                  } else {
                    newSeatTick = [...arrSeat, el];
                  }
                  setArrSeat(newSeatTick);
                }}
                seatTick={arrSeat}
              />
            );
          })}
        </G>
      </Svg>
    );
  }
  const renderScreen = () => {
    return (
      <View>
        <Text style={styles.txtScreen}>MÀN HÌNH</Text>
      </View>
    );
  };
  const renderNote = () => {
    return (
      <View style={styles.vNote}>
        {statusSeat.map((el, index) => (
          <>
            <View
              style={{
                backgroundColor: el.colorSeat,
                width: scale(15),
                height: scale(15),
                marginRight : scale(5),
                marginTop : scale(5)
              }}
            />
            <View style={{marginTop : scale(5)}} key={index}>
              <Text style={styles.txtsSeat}>{el.stt}</Text>
            </View>
          </>
        ))}
      </View>
    );
  };
  const renderBottom = () => {
    return (
      <View style={styles.bottom}>
        <View>
          <Text style={styles.txtNameMovie}>{dataMovie?.name}</Text>
          <Text style={styles.txtLang}>{dataMovie?.language}</Text>
        </View>
        <TouchableOpacity style={styles.btnBook} onPress={() => {}}>
          <Text style={styles.txtBook}>Đặt vé</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenComponent
      titleHeader={`${dataMovie?.name} - ${time}`}
      back
      disableScrollView={true}
      renderView={
        <>
          <View style={styles.conatiner}>
            {renderScreen()}
            {screenSeat()}
            {renderNote()}
          </View>
          {renderBottom()}
        </>
      }
    />
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyOpacity,
  },
  txtScreen: {
    fontSize: scale(30),
    color: colors.blackOpacity,
  },
  bottom: {
    minHeight: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(15),
  },
  btnBook: {
    width: scale(50),
    height: scale(25),
    backgroundColor: colors.red,
    borderRadius: scale(25),
    justifyContent: 'center',
    marginTop: scale(5),
  },
  txtBook: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
  txtNameMovie: {
    fontWeight: '700',
    fontSize: scale(16),
  },
  txtLang: {
    color: colors.gray,
  },
  vNote: {
    flexDirection: 'row',
    marginTop : scale(5)
  },
  txtsSeat :{
    marginRight: scale(5),
  }
});
