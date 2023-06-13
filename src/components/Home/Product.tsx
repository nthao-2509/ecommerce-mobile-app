import { Dimensions, Image, StyleSheet, View, ViewProps, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store'
import { TypeProduct, selectAllProduct } from '../../features/ProductSlice'
import { Card, Layout, Text } from '@ui-kitten/components'
import { URL_HOST } from '../../helpers/UrlServer'
import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'
import Colors from '../../modules/Colors'
import Icon from '@expo/vector-icons/Ionicons'
import { addToCart, selectCartFromLocal } from '../../features/CartSlice'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const { width, height } = Dimensions.get('screen')

const Product = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const { arrayProduct } = useSelector((state: RootState) => state.product)
  const { cartItems } = useSelector((state: RootState) => state.cart)

  const handleAddToCart = (productItem: any) => {
    dispatch(addToCart(productItem))
    dispatch(selectCartFromLocal())
  }

  const handleDetailProduct = (product: any) => {
    navigation.navigate('detail-product', {
      product,
    })
  }

  React.useEffect(() => {
    dispatch(selectAllProduct())
  }, [dispatch])
  React.useEffect(() => {
    dispatch(selectCartFromLocal())
  }, [dispatch, cartItems])

  return (
    <ScrollView
      style={{
        marginBottom: height * 0.2,
      }}
    >
      <Layout style={styles.topContainer} level='1'>
        {arrayProduct?.map((item: TypeProduct) => {
          const [priceFormat] = formatCurrency({ amount: Number(item.priceProduct), code: 'VND' })

          return (
            <Card key={item.idProduct} style={styles.card}>
              <TouchableOpacity onPress={() => handleDetailProduct(item)}>
                <Image resizeMode='cover' style={styles.imageProduct} source={{ uri: `${URL_HOST}/image/${item.images?.[0]}` }} />
                <View style={styles.iconCart}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.white,
                      padding: 5,
                      borderRadius: 10,
                    }}
                    onPress={() => handleAddToCart(item)}
                  >
                    <Icon name='cart-outline' size={30} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: 3,
                  }}
                >
                  <Text numberOfLines={1} appearance='hint'>
                    {item.nameProduct}
                  </Text>
                  <Text
                    category='s2'
                    style={{
                      fontSize: 15,
                    }}
                  >
                    {priceFormat}
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
          )
        })}
      </Layout>
    </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    padding: 0,

    // width: width - 40,
  },
  card: {
    // flex: 1,
    padding: 0,
    margin: 0,
    width: (width - 50) / 2,
    height: height / 3,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  imageProduct: {
    width: '100%',
    height: '82%',
    borderRadius: 10,
  },
  // text: {
  //   margin: 2,
  // },
  iconCart: {
    position: 'absolute',
    top: '63.5%',
    right: 10,
  },
})
