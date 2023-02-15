// import * as WebBrowser from 'expo-web-browser';
// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';

import React, { useState, useEffect} from 'react';
import MapView , { Marker } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, Dimensions, Button} from 'react-native'; 
import * as Location from 'expo-location'; 
import { Text, View} from './Themed';


export default function Maps({ path }: { path: string }){

    const [mapRegion, setMapRegion] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }); 

    const userLocation = async() => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            setErrorMsg('Permission to access location was denied'); 
        }
        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
          });
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
        });
        console.log(location.coords.latitude, location.coords.longitude); 
    }

    useEffect(() => {
        userLocation(); 
    }, []); 

    return (
        <View style={styles.container}>
          <MapView style={styles.map} 
            region={mapRegion}
          >
            <Marker coordinate={mapRegion} title='Marker' />

          </MapView>
          <Button title='Get Location' onPress={userLocation}/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });

function setErrorMsg(arg0: string) {
    throw new Error('Function not implemented.');
}
