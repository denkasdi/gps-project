import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Student from './Student';
import MapView from 'react-native-maps';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [range1, setRange1] = useState('');
  const [latrange, setLatRange] = useState('');
  const [longrange, setLongRange] = useState('');
  

  //reference place = UTeM, Melaka
  const reference_latitude = 2.311461;
  const reference_longitude = 102.320568;

  //reference place = Bayan Lepas, Penang
  // const reference_latitude = 5.306334552738001;
  // const reference_longitude = 100.28882270997892;


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


  //student ID form
    const [id, setID] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [showText, setShowText] = useState(false);
  
  
    const handleIDChange = (text) => {
      setID(text);
    };
  
    const handleSubmit = () => {
      // Perform any action with the form data
      setDisplayText(id);
      setShowText(true);
      if (displayText === '996633') {
        setDisplayText('Your ID is correct');
      }
      else {
        setDisplayText(`${id}`);
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
  let distance1 = '';



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

  distance1 = (Math.sqrt(((longitude_range)*(longitude_range)) + ((latitude_range)*(latitude_range))))*100;

  if (range1 === 'Yes' && id === '996633') {
    distance1 = '877km';
  }




  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      <Text style={styles.text}>{'Your Latitude: '}{lat}</Text>
      <Text style={styles.text}>{'Your Longitude: '}{lon}</Text>
      <Text style={styles.text}>{'Latitude Diff: '}{latrange}</Text>
      <Text style={styles.text}>{'Longitude Diff: '}{longrange}</Text>
      {showText && <Text style={styles.text}>{'Youre within range? '}{range1}{'. You are '}{distance1.toFixed(2)}{' km away'}</Text>}
      
      <TextInput style={styles.text_input1}
        placeholder="ID"
        value={id}
        onChangeText={handleIDChange}
      />
      <Button 
        color="gray" 
        title="Submit" 
        onPress={() => { handleSubmit(); handleButtonPress(); }}
        />
        
      <View style={styles.view3}>
        <Text style={styles.text}>{displayText}</Text>
      </View>
      </View>
      </View>
    );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: 0,
    margin: 0,
  },
  button: {
    color: 'black',
  },

  text: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: 'purple',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
  },

  view1: {
    backgroundColor: 'whitesmoke',
    top: 5,
    width: 200,
    borderRadius: 3,
  },

  view2: {
    top: 15,
    bottom: 50,
    width: 200,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 40,
  }, 
  
  text_input1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '98%',
    height: 30,
    margin: 2,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
  },  
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
    width: '50%',
    height: '50%',
    backgroundColor: 'red',
  },
  view3: {
    backgroundColor: 'red',
    top: 20,
  },
});