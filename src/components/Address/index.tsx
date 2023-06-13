import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import GoogleMap from '../Home/GoogleMap'

const IndexAddress = () => {
  return (
    <Container>
      <Header title='Địa chỉ nhận hàng' />
      <View
        style={{
          marginTop: 20,
          height: Dimensions.get('screen').height * 0.6,
        }}
      >
        <GoogleMap />
      </View>
    </Container>
  )
}

export default IndexAddress

const styles = StyleSheet.create({})
