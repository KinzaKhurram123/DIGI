import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Anotherbackground from '../../Components/Header-Bar/background'
import { images } from '../../Components/Constant'
const Splash = ({navigation}) => {
    setTimeout(() =>{
        navigation.navigate('Start')
       }, 5000 )
  return (
     <View style={styles.Splash}>
      <Image source={images.splash_background}/>
     </View>
  )
}
export default Splash

const styles = StyleSheet.create({
Splash:{
  flex : 1,
}
})