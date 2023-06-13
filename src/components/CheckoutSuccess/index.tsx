import { StyleSheet, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Container from '../Container'
import { Button, Text } from '@ui-kitten/components'
import Colors from '../../modules/Colors'
import { URL_HOST } from '../../helpers/UrlServer'
import Icon from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const { width, height } = Dimensions.get('screen')

const CheckoutSuccess = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
          marginLeft: -20,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            textTransform: 'uppercase',
            fontWeight: '500',
            fontSize: 25,
            textAlign: 'center',
            // color: Colors.green,
          }}
        >
          Thành công
        </Text>
        <Image
          resizeMode='contain'
          source={{ uri: `${URL_HOST}/image/check_success.png` }}
          style={{
            width: width / 3,
            height: height * 0.2,
          }}
        />
        <Button
          appearance='filled'
          onPress={() => {
            navigation.navigate('home-screen')
          }}
        >
          Quay lại trang chủ
        </Button>
      </View>
    </Container>
  )
}

export default CheckoutSuccess

const styles = StyleSheet.create({})
