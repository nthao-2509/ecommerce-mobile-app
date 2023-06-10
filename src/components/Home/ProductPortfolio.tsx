import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { URL_HOST, URL_SERVER } from '../../helpers/UrlServer'
import { AppDispatch, RootState } from '../../../store'
import { selectAllProductPortfolio } from '../../features/ProductPortfolio'

const { width } = Dimensions.get('screen')

const ProductPortfolio = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { arrayProductPortfolio } = useSelector((state: RootState) => state.productPortfolio)
  React.useEffect(() => {
    dispatch(selectAllProductPortfolio())
  }, [dispatch])

  return (
    <View>
      <View style={styles.cards}>
        {arrayProductPortfolio?.map((item: { code: string; name: string; id: string }) => (
          <TouchableOpacity style={styles.card} key={item.id}>
            <View style={styles.ViewImage}>
              <Image source={{ uri: `${URL_HOST}/image/2000.webp` }} resizeMode='contain' style={styles.image} />
            </View>
            <Text style={styles.textEducation}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default ProductPortfolio

const styles = StyleSheet.create({
  cards: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  card: {
    width: width / 4.5,
    alignItems: 'center',
    padding: 10,
  },
  ViewImage: {
    width: 60,
    height: 67,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textEducation: {
    textAlign: 'center',
    height: 30,
    // fontFamily: 'Roboto-Regular',
    fontSize: 13,
    fontWeight: '400',
  },
})
