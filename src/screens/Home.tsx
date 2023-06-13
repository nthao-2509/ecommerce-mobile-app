import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '../components/Container'
import Header from '../components/Home/Header'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import Colors from '../modules/Colors'
import GoogleMap from '../components/Home/GoogleMap'
import IndexBottomSheet from '../components/BottomSheet'
import ProductPortfolio from '../components/Home/ProductPortfolio'
import Product from '../components/Home/Product'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { selectFavorites } from '../features/FavoritesSlice'

const Home = () => {
  const [textPickUpPoint, setTextPickUpPoint] = useState<string>('')
  const [textYourPoint, setTextYourPoint] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  React.useEffect(() => {
    dispatch(selectFavorites())
  }, [dispatch])
  return (
    <Container>
      {/* <GoogleMap /> */}
      <Header />
      <ProductPortfolio />
      <Product />
      {/* <IndexBottomSheet snapPoints={['50%']}>
        <Text style={styles.text_title}>Where are you going today?</Text>
        <View style={styles.view_contentBottomSheet}>
          <TextInput
            style={[styles.input_pickupPoint, { marginTop: 20 }]}
            placeholder='Choose pick up point'
            onChangeText={(newText: string) => setTextPickUpPoint(newText)}
            defaultValue={textPickUpPoint}
          />
          <TextInput
            style={[styles.input_pickupPoint, { marginTop: 10 }]}
            placeholder='Choose your destination'
            onChangeText={(newText: string) => setTextYourPoint(newText)}
            defaultValue={textYourPoint}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.mainColor,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              paddingHorizontal: 17,
              paddingVertical: 9,
              borderRadius: 20,
            }}
          >
            <Image source={require('../../assets/images/image-1.png')} style={styles.image1} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                lineHeight: 21,
                fontStyle: 'normal',
                fontWeight: '400',
                color: Colors.white,
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
        </View>
      </IndexBottomSheet> */}
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  text_title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    lineHeight: 27,
    color: Colors.dark,
  },
  view_contentBottomSheet: {},
  input_pickupPoint: {
    height: 48,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    fontStyle: 'normal',
    paddingHorizontal: 20,
  },
  image1: {
    width: 12.21,
    height: 16,
    resizeMode: 'cover',
  },
})
