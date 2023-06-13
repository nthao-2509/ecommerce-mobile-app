import { StyleSheet, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import { Button, Card, Layout, Text } from '@ui-kitten/components'
import ScrollViewCustom from '../ScrollView'
import Icon from '@expo/vector-icons/Ionicons'
import Colors from '../../modules/Colors'
import { formatCurrency } from 'react-native-format-currency'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Checkout = ({
  route: {
    params: { total },
  },
}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [priceFormat] = formatCurrency({ amount: Number(total), code: 'VND' })
  const handleSuccess = () => {
    navigation.navigate('checkout-screen-success')
  }
  return (
    <Container>
      <Header title='THANH TOÁN' />
      <ScrollViewCustom>
        <View>
          <View>
            <Card
              style={{
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  borderBottomColor: Colors.pink,
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
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
                    textAlign: 'left',
                  }}
                >
                  Địa chỉ nhà
                </Text>
                <Icon name='create-outline' size={25} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 15,
                  gap: 10,
                }}
              >
                <Icon name='location-outline' size={20} />
                <Text
                  style={{
                    paddingRight: 25,
                  }}
                >
                  64 Huỳnh Văn Nghệ, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng
                </Text>
              </View>
            </Card>
            <Card
              style={{
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  borderBottomColor: Colors.pink,
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
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
                    textAlign: 'left',
                  }}
                >
                  Thông tin người nhận
                </Text>
                <Icon name='create-outline' size={25} />
              </View>
              <View
                style={{
                  padding: 15,
                  gap: 10,
                }}
              >
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    category='label'
                    style={{
                      fontSize: 15,
                    }}
                  >
                    Họ Tên:
                  </Text>
                  <Text> Nguyễn Văn Tài</Text>
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    category='label'
                    style={{
                      fontSize: 15,
                    }}
                  >
                    Số điện thoại:
                  </Text>
                  <Text> 0365750646</Text>
                </View>
              </View>
            </Card>
            <Card
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  fontSize: 17,
                  textAlign: 'left',
                  borderBottomColor: Colors.pink,
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                Hình thức thanh toán
              </Text>
              <Text
                style={{
                  padding: 15,
                }}
              >
                Thanh toán khi nhận hàng
              </Text>
            </Card>
            <Card
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  fontSize: 17,
                  textAlign: 'left',
                  borderBottomColor: Colors.pink,
                  borderBottomWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                Tổng tiền
              </Text>
              <View
                style={{
                  padding: 15,
                }}
              >
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text category='label'>Đơn hàng: </Text>
                  <Text>{priceFormat}</Text>
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text category='label'>Giảm giá: </Text>
                  <Text>{0}</Text>
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text category='label'>Thành tiền: </Text>
                  <Text>{priceFormat}</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </ScrollViewCustom>
      <Button onPress={handleSuccess} appearance='filled'>
        HOÀN THÀNH THANH TOÁN
      </Button>
    </Container>
  )
}

export default Checkout

const styles = StyleSheet.create({})
