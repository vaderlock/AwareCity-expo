import React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const logo = require('../assets/images/ac_no_bg.png');

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={logo} /> 

      <View style={styles.separator}/>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column', 
    backgroundColor: 'rgb(251,234,215)',
  },
  logo: {
    width: '90%',
    height: '10%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(104,83,59)'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    color: 'rgb(251,234,215)'
  },
});
