import { Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { URL_HOST } from '../../helpers/UrlServer'
import { ButtonGroup, Button, Text } from '@ui-kitten/components'
import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'
import Icon from '@expo/vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { addToCart, removeCartItem, selectCartFromLocal, updateQuantity } from '../../features/CartSlice'
import { addToWishList, removeWishList, selectFavorites } from '../../features/FavoritesSlice'
import Colors from '../../modules/Colors'

const { width, height } = Dimensions.get('window')
type TypeCartItem = {
  idUser: string
  images: string[]
  address: string
  priceProduct: string
  idProduct: string
  nameProduct: string
  slug: string
  detailProduct: string
  thongSoKyThuat: {
    tinhtrangBaoHanh: number
    xuatXu: string
    namDangKy: string
    hangSanPham: string
    dongSanPhan: string
  }
  active: number
  cartQuantity: number
}

type Props = {
  item: any
  favorite?: boolean
}
const CartItem = ({ item, favorite = false }: Props) => {
  const [priceFormat] = formatCurrency({ amount: Number(item.priceProduct), code: 'VND' })
  const [quantity, setQuantity] = React.useState<number>(item.cartQuantity)
  const dispatch = useDispatch<AppDispatch>()
  const handleIncrement = () => {
    setQuantity((prev: number) => prev + 1)
    dispatch(addToCart(item))
  }
  const handleDecrement = () => {
    setQuantity((prev: number) => {
      if (prev <= 0) {
        return prev
      } else {
        return prev - 1
      }
    })
    dispatch(updateQuantity(item))
  }
  const handleRemoveCartItem = () => {
    if (favorite) {
      dispatch(removeWishList(item))
      dispatch(selectFavorites())
    } else {
      dispatch(removeCartItem(item))
      dispatch(selectCartFromLocal())
    }
  }
  const handleAddToCart = () => {
    dispatch(addToCart(item))
    dispatch(selectCartFromLocal())
    // console.log('object')
  }
  return (
    <View
      style={{
        marginVertical: 15,
      }}
      key={item.idProduct}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Image
          source={{ uri: `${URL_HOST}/image/${item?.images?.[0]}` }}
          resizeMode='cover'
          style={{
            width: width / 3,
            height: height * 0.1,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: width / 2 - 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}
        >
          <Text numberOfLines={1}>{item.nameProduct}</Text>
          <Text
            category='s2'
            style={{
              fontSize: 15,
            }}
          >
            {priceFormat}
          </Text>
          {!favorite && (
            <ButtonGroup size='small' appearance='filled'>
              <Button onPress={handleIncrement}>
                <Icon name='add-outline' />
              </Button>
              <Button disabled>{quantity}</Button>
              <Button onPress={handleDecrement}>
                <Icon name='remove-outline' />
              </Button>
            </ButtonGroup>
          )}
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={handleRemoveCartItem}>
            <Icon name='close-circle-outline' size={30} />
          </TouchableOpacity>
          {favorite && (
            <Button
              onPress={handleAddToCart}
              appearance='filled'
              style={{
                backgroundColor: Colors.gray,
              }}
            >
              <Icon name='cart-outline' color={Colors.white} size={30} />
            </Button>
          )}
        </View>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})
