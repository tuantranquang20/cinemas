import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Svg, {G, Path, Rect, Text, TSpan} from 'react-native-svg';

const AR = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11'];
const BR = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11'];
const CR = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11'];
const DR = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11'];
const ER = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11'];
const FR = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'];
const GR = ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11'];
const HR = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11'];
const JR = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11'];

const BookingScreen = () => {
  function screenSeat(props) {
    return (
      <Svg width={365} height={309} viewBox="0 0 365 309" {...props}>
        <G data-name="Group 1">
          <G data-name="Rectangle 9" fill="#fff" stroke="#707070">
            <Path stroke="none" d="M0 0h365v309H0z" />
            <Path fill="none" d="M.5.5h364v308H.5z" />
          </G>
          {AR.map((el, index) => {
            const incX = 17 + index * 31;
            const incT = 20 + index * 31;
            return (
              <G data-name={`Group ${index}`} onPress={()=>console.log("press")} >
                <G
                  data-name="Rectangle 10"
                  transform={`translate(${incX} 20)`}
                  fill="#919090"
                  stroke="#707070">
                  <Rect width={21} height={26} rx={5} stroke="none" />
                  <Rect
                    x={0.5}
                    y={0.5}
                    width={20}
                    height={25}
                    rx={4.5}
                    fill="none"
                  />
                </G>
                <Text
                  transform={`translate(${incT} 37)`}
                  fill="#fff"
                  fontSize={11}
                  fontFamily="HelveticaNeue, Helvetica Neue">
                  <TSpan x={0} y={0}>
                    {el}
                  </TSpan>
                </Text>
              </G>
            );
          })}

          <G data-name="Group 24">
            <G
              data-name="Rectangle 10"
              transform="translate(17 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 25">
            <G
              data-name="Rectangle 10"
              transform="translate(48 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 26">
            <G
              data-name="Rectangle 10"
              transform="translate(79 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(83 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B3'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 27">
            <G
              data-name="Rectangle 10"
              transform="translate(110 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(114 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B4'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 28">
            <G
              data-name="Rectangle 10"
              transform="translate(141 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(145 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B5'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 29">
            <G
              data-name="Rectangle 10"
              transform="translate(234 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(238 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B8'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 30">
            <G
              data-name="Rectangle 10"
              transform="translate(203 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(207 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B7'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 31">
            <G
              data-name="Rectangle 10"
              transform="translate(172 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(176 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B6'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 32">
            <G
              data-name="Rectangle 10"
              transform="translate(327 53)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(328 70)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B11'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 33">
            <G
              data-name="Rectangle 10"
              transform="translate(296 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(297 71)"
              fill="#fcf5f5"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'B10'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 34">
            <G
              data-name="Rectangle 10"
              transform="translate(265 54)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(269 71)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue"
              opacity={0.8}>
              <TSpan x={0} y={0}>
                {'B9'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 35">
            <G
              data-name="Rectangle 10"
              transform="translate(17 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A1"
              transform="translate(21 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 36">
            <G
              data-name="Rectangle 10"
              transform="translate(48 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A2"
              transform="translate(52 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 37">
            <G
              data-name="Rectangle 10"
              transform="translate(79 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A3"
              transform="translate(83 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A3'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 38">
            <G
              data-name="Rectangle 10"
              transform="translate(110 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A4"
              transform="translate(114 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A4'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 39">
            <G
              data-name="Rectangle 10"
              transform="translate(141 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A5"
              transform="translate(145 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A5'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 40">
            <G
              data-name="Rectangle 10"
              transform="translate(234 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A8"
              transform="translate(238 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A8'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 41">
            <G
              data-name="Rectangle 10"
              transform="translate(203 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A7"
              transform="translate(207 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A7'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 42">
            <G
              data-name="Rectangle 10"
              transform="translate(172 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A6"
              transform="translate(176 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A6'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 43">
            <G
              data-name="Rectangle 10"
              transform="translate(327 87)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A11"
              transform="translate(328 104)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A11'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 44">
            <G
              data-name="Rectangle 10"
              transform="translate(296 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A10"
              transform="translate(297 105)"
              fill="#fcf5f5"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A10'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 45">
            <G
              data-name="Rectangle 10"
              transform="translate(265 88)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              data-name="A9"
              transform="translate(269 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'A9'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 46">
            <G
              data-name="Rectangle 10"
              transform="translate(17 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 47">
            <G
              data-name="Rectangle 10"
              transform="translate(48 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 48">
            <G
              data-name="Rectangle 10"
              transform="translate(79 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(83 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C3'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 49">
            <G
              data-name="Rectangle 10"
              transform="translate(110 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(114 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C4'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 50">
            <G
              data-name="Rectangle 10"
              transform="translate(141 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(145 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C5'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 51">
            <G
              data-name="Rectangle 10"
              transform="translate(234 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(238 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C8'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 52">
            <G
              data-name="Rectangle 10"
              transform="translate(203 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(207 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C7'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 53">
            <G
              data-name="Rectangle 10"
              transform="translate(172 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(176 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C6'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 54">
            <G
              data-name="Rectangle 10"
              transform="translate(327 87)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(328 104)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C11'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 55">
            <G
              data-name="Rectangle 10"
              transform="translate(296 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(297 105)"
              fill="#fcf5f5"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C10'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 56">
            <G
              data-name="Rectangle 10"
              transform="translate(265 88)"
              fill="red"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(269 105)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'C9'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 57">
            <G
              data-name="Rectangle 10"
              transform="translate(17 156)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 173)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'F1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 58">
            <G
              data-name="Rectangle 10"
              transform="translate(48 156)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 173)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'F2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 59">
            <G
              data-name="Rectangle 10"
              transform="translate(17 122)"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 139)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'E1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 60">
            <G
              data-name="Rectangle 10"
              transform="translate(48 122)"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 139)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'E2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 65">
            <G
              data-name="Rectangle 10"
              transform="translate(17 258)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 275)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'J1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 66">
            <G
              data-name="Rectangle 10"
              transform="translate(48 258)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 275)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'J2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 67">
            <G
              data-name="Rectangle 10"
              transform="translate(17 224)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 241)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'H1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 68">
            <G
              data-name="Rectangle 10"
              transform="translate(48 224)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 241)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'H2'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 69">
            <G
              data-name="Rectangle 10"
              transform="translate(17 190)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(21 207)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'G1'}
              </TSpan>
            </Text>
          </G>
          <G data-name="Group 70">
            <G
              data-name="Rectangle 10"
              transform="translate(48 190)"
              fill="#919090"
              stroke="#707070">
              <Rect width={21} height={26} rx={5} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={20}
                height={25}
                rx={4.5}
                fill="none"
              />
            </G>
            <Text
              transform="translate(52 207)"
              fill="#fff"
              fontSize={11}
              fontFamily="HelveticaNeue, Helvetica Neue">
              <TSpan x={0} y={0}>
                {'G2'}
              </TSpan>
            </Text>
          </G>
        </G>
      </Svg>
    );
  }
  return <View style={styles.conatiner}>{screenSeat()}</View>;
};

export default BookingScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
