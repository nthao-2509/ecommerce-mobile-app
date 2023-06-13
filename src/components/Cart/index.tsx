import { StyleSheet, Text, View, RefreshControl, Dimensions } from 'react-native'
import React from 'react'
import Header from '../Header'
import Container from '../Container'
import { AppDispatch, RootState } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartFromLocal } from '../../features/CartSlice'
import CartItem from './CartItem'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from '@ui-kitten/components'
import Colors from '../../modules/Colors'
import Icon from '@expo/vector-icons/Ionicons'
import { formatCurrency } from 'react-native-format-currency'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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

const CartComponent = () => {
  const [refresh, setRefresh] = React.useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const { cartItems, isLoading } = useSelector((state: RootState) => state.cart)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const pullMe = () => {
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
      dispatch(selectCartFromLocal())
    }, 3000)
  }
  const handleCheckout = (total: any) => {
    navigation.navigate('checkout-screen', { total })
  }
  React.useEffect(() => {
    dispatch(selectCartFromLocal())
  }, [dispatch])
  let cartTotalAmount = 0
  if (cartItems) {
    JSON.parse(cartItems)?.forEach((item: any) => {
      cartTotalAmount += item.cartQuantity * Number(item.priceProduct)
    })
  }

  const renderTotal = (total: any) => {
    const [priceFormat] = formatCurrency({ amount: Number(total), code: 'VND' })
    return (
      <Text
        style={{
          textTransform: 'uppercase',
          fontWeight: '500',
          fontSize: 17,
        }}
      >
        {priceFormat}
      </Text>
    )
  }
  return (
    <Container>
      <Header title='Giỏ hàng' />
      <ScrollView
        style={{
          marginTop: 20,
          height: Dimensions.get('screen').height * 0.65 - 13,
        }}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}
      >
        {!isLoading && cartItems && (
          <>
            {JSON.parse(cartItems)?.map((item: any) => {
              return (
                <View key={item.idProduct}>
                  <CartItem item={item} />
                </View>
              )
            })}
          </>
        )}
      </ScrollView>
      <View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: 17,
            }}
          >
            Tổng:
          </Text>
          {renderTotal(cartTotalAmount)}
        </View>
        <Button onPress={() => handleCheckout(cartTotalAmount)} appearance='filled'>
          THANH TOÁN
        </Button>
      </View>
    </Container>
  )
}

export default CartComponent

const styles = StyleSheet.create({})
