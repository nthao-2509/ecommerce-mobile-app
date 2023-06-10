import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectLocationDevice } from '../../features/Location'
import { TypeLocation } from '../../types/Types'
import Container from '../Container'

const GoogleMap = () => {
  const location: TypeLocation = useSelector(selectLocationDevice)
  const [latitude, setLatitude] = useState<number | null | undefined>(null)
  const [longitude, setLongitude] = useState<number | null | undefined>(null)
  useEffect(() => {
    if (location) {
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
    }
  }, [location])
  return (
    <SafeAreaView>
      {latitude && longitude ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          mapType='standard'
        >
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title='Nguyen Thanh Hao'
            description='Reprehenderit cupidatat exercitation ut cillum.'
            identifier='origin'
            pinColor='#00CCBB'
          />
        </MapView>
      ) : (
        <Container>
          <Text>Không có dữ liệu</Text>
        </Container>
      )}
    </SafeAreaView>
  )
}

export default GoogleMap

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
})
