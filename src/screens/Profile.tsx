import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import { Avatar, Card } from '@ui-kitten/components'
import { URL_HOST } from '../helpers/UrlServer'
import ScrollViewCustom from '../components/ScrollView'
import { useSelector } from 'react-redux'
import Icon from '@expo/vector-icons/Ionicons'
import IndexBottomSheet from '../components/BottomSheet'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Profile = () => {
  const { user } = useSelector((state: any) => state.auth)
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const {
    userData: { firstName, lastName, email },
  } = JSON.parse(user)
  return (
    <Container>
      <Header title='Thông tin cá nhân' />
      <ScrollViewCustom>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Avatar
            size='giant'
            source={{
              uri: `${URL_HOST}/image/default_avatar.png`,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 17,
                textAlign: 'left',
              }}
            >
              {firstName} {lastName}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 17,
                textAlign: 'left',
              }}
            >
              {email}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Card
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    fontSize: 17,
                    textAlign: 'left',
                    marginBottom: 10,
                  }}
                >
                  Đơn hàng
                </Text>
                <Text>Bạn có 1 đơn hàng</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('my-order-screen')}>
                <Icon name='chevron-forward-outline' size={30} />
              </TouchableOpacity>
            </View>
          </Card>
          <Card
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    fontSize: 17,
                    textAlign: 'left',
                    marginBottom: 10,
                  }}
                >
                  Địa chỉ nhận hàng
                </Text>
                <Text>1 địa chỉ nhận hàng</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('address-screen')}>
                <Icon name='chevron-forward-outline' size={30} />
              </TouchableOpacity>
            </View>
          </Card>
          <Card
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    fontSize: 17,
                    textAlign: 'left',
                    marginBottom: 10,
                  }}
                >
                  Đánh giá
                </Text>
                <Text>0 Đánh giá</Text>
              </View>
              <TouchableOpacity>
                <Icon name='chevron-forward-outline' size={30} />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollViewCustom>
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({})
