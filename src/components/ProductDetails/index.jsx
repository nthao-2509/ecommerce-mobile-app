import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import { URL_HOST } from '../../helpers/UrlServer'
import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'
import { Button, ButtonGroup, Text } from '@ui-kitten/components'
import Icon from '@expo/vector-icons/Ionicons'
import Colors from '../../modules/Colors'
import DOMParser from 'react-native-html-parser'
import HTMLView from 'react-native-htmlview'
import ScrollViewCustom from '../ScrollView'
import { addToCart } from '../../features/CartSlice'
import { useDispatch } from 'react-redux'
import { addToWishList } from '../../features/FavoritesSlice'
import Toast from 'react-native-toast-message'

const { width, height } = Dimensions.get('screen')

const ProductDetail = ({
  route: {
    params: { product },
  },
}) => {
  const [quantity, setQuantity] = React.useState(1)
  const dispatch = useDispatch()

  const [priceFormat] = formatCurrency({ amount: Number(product.priceProduct), code: 'VND' })
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
        return prev
      } else {
        return prev - 1
      }
    })
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }
  const handleAddToFavorites = () => {
    dispatch(addToWishList(product))
  }

  return (
    <Container>
      <Header title={product.nameProduct} />
      <ScrollViewCustom>
        <View
          style={{
            marginLeft: -20,
          }}
        >
          <Image
            source={{ uri: `${URL_HOST}/image/${product?.images?.[0]}` }}
            resizeMode='cover'
            style={{
              width: width,
              height: height / 3,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: 17,
              textAlign: 'left',
            }}
          >
            {product.nameProduct}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}
          >
            <Text
              category='label'
              style={{
                fontSize: 15,
              }}
            >
              {priceFormat}
            </Text>
            <ButtonGroup size='small' appearance='filled'>
              <Button onPress={handleIncrement}>
                <Icon name='add-outline' />
              </Button>
              <Button disabled>{quantity}</Button>
              <Button onPress={handleDecrement}>
                <Icon name='remove-outline' />
              </Button>
            </ButtonGroup>
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{
                fontWeight: '600',
                fontSize: 17,
                textAlign: 'left',
                borderBottomColor: Colors.pink,
                borderBottomWidth: 1,
                paddingBottom: 5,
              }}
            >
              Mô tả sản phẩm
            </Text>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <HTMLView value={product.detailProduct} stylesheet={styles} />
            </View>
          </View>
        </View>
      </ScrollViewCustom>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onPress={handleAddToFavorites} appearance='outline'>
          <Icon name='bookmark-outline' size={30} />
        </Button>
        <Button
          onPress={handleAddToCart}
          style={{
            width: '77.5%',
          }}
          appearance='filled'
        >
          Thêm vào giỏ hàng
        </Button>
      </View>
    </Container>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})
