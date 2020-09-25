import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
navigator.geolocation = require('@react-native-community/geolocation');
import R from '@app/assets/R';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLatitude: 21.004796,
      userLongitude: 105.845596,
    };
    this.locationWatchId = null;
  }
  componentDidMount = () => {
    this.getUserPosition();
  };
  getUserPosition() {
    this.locationWatchId = navigator.geolocation.watchPosition(
      (pos) => {
        this.setState({
          userLatitude: pos.coords.latitude,
          userLongitude: pos.coords.longitude,
        });
      },
      (err) => console.warn(err, 'Lỗi err'),
      {
        enableHighAccuracy: true,
      },
    );
  }
  render() {
    const {userLatitude, userLongitude} = this.state;
    const market = (
      <Marker
        coordinate={{latitude: 21.004796, longitude: 105.845596}}
        image={R.images.ic_location}
      />
    );
    // const polyline = (
    //   <Polyline
    //     coordinate={[20.999957, 105.842195]}
    //     strokeWidth={4}
    //     strokeColor="#000"
    //   />
    // );
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation
          followsUserLocation
          style={styles.map}
          region={{
            latitude: userLatitude,
            longitude: userLongitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {market}
          {/* {polyline} */}
        </MapView>
      </View>
    );
  }
}
export default MapScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width,
    height: height,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
