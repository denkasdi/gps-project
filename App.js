import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [range1, setRange1] = useState('');
  const [latrange, setLatRange] = useState('');
  const [longrange, setLongRange] = useState('');

  //reference place = UTeM
  const reference_latitude = 2.311461;
  const reference_longitude = 102.320568;


  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.log(error);
        setErrorMsg('Error retrieving location');
      }
    })();
  }, []);

  let latitude1 = 'Waiting...';
  let longitude1 = '';
  if (errorMsg) {
    latitude1 = errorMsg;
  } else if (location) {
    latitude1 = `${location.coords.latitude}`;
    longitude1 = `${location.coords.longitude}`;
  }

  //get value for latitude and longitude
  const handleButtonPress = () => {
    setLat(latitude1);
    setLon(longitude1);
    setLatRange(latitude_range);
    setLongRange(longitude_range)
    if (latitude_range_ve < 0.0009 && longitude_range_ve < 0.0009){
      setRange1('Yes')
    }
    else{
      setRange1('No')
    }
  };

  //get tolerance for GPS area
  let latitude_tolerance = 0.03; //range is within 3km
  let latitude_range_left = '';
  let latitude_range_right = '';
  let latitude_range = '';


  let longitude_tolerance = 0.03; //range is within 3km
  let longitude_range_left = '';
  let longitude_range_right = '';
  let longitude_range = '';



  latitude_range_left = latitude1 + latitude_tolerance;
  latitude_range_right = latitude1 - latitude_tolerance;
  latitude_range = latitude_range_left - latitude_range_right;

  longitude_range_left = longitude1 + longitude_tolerance;
  longitude_range_right = longitude1 - longitude_tolerance;
  longitude_range = longitude_range_left - longitude_range_right;
  
  latitude_range = latitude1 - reference_latitude;
  latitude_range_ve = latitude_range*latitude_range;

  longitude_range = longitude1 - reference_longitude;
  longitude_range_ve = longitude_range*longitude_range;




  return (
    <View style={styles.container}>
      <Button        
        title={'Get Location'}
        onPress={handleButtonPress}
      />
      <Text style={styles.text}>{'Your Latitude: '}{lat}</Text>
      <Text style={styles.text}>{'Your Longitude: '}{lon}</Text>
      <Text style={styles.text}>{'Latitude Range: '}{latrange}</Text>
      <Text style={styles.text}>{'Longitude Range: '}{longrange}</Text>
      <Text style={styles.text}>{'Youre within Range? '}{range1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
    borderWidth: 1,
    borderColor: 'black',
  },
});
