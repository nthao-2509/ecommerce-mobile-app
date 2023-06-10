import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import StylesModules from '../modules/style'
import { TypeLocation } from '../types/Types'
import { addToLocation, selectLocationDevice } from '../features/Location'
import * as Location from 'expo-location'
import { useDispatch, useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../modules/Colors'
type Props = {
  children: any
  padding?: boolean
}
SplashScreen.preventAutoHideAsync()

const Container = ({ children, padding = true }: Props) => {
  const dispatch = useDispatch()
  const getLocationDevice = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permission to access location was denied')
      return
    }
    let location: TypeLocation | null = await Location.getCurrentPositionAsync({})
    dispatch(addToLocation(location))
  }

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../assets/font/Poppins-Black.ttf'),
    'Poppins-Medium': require('../../assets/font/Poppins-Medium.ttf'),
    'Poppins-Thin': require('../../assets/font/Poppins-Thin.ttf'),
    'Poppins-Light': require('../../assets/font/Poppins-Light.ttf'),
    'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
  })
  useEffect(() => {
    getLocationDevice()
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }

  return (
    <LinearGradient
      style={[styles.container, padding && StylesModules.container]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[Colors.colorBG, Colors.colorBG1, Colors.colorBG2]}
    >
      <View onLayout={onLayoutRootView}>{children}</View>
    </LinearGradient>
  )
}

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
