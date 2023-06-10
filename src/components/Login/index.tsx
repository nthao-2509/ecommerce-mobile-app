import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import React from 'react'
import Container from '../Container'
import { LinearGradient } from 'expo-linear-gradient'
import ButtonLogin from './ButtonLogin'
import Colors from '../../modules/Colors'
import { URL_HOST } from '../../helpers/UrlServer'
import { IconElement, Input } from '@ui-kitten/components'
import Icon from '@expo/vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { login } from '../../features/AuthSlice'
import { AppDispatch } from '../../../store'

const { width, height } = Dimensions.get('screen')

const AlertIcon = (props: any) => <Icon {...props} name='alert-circle-outline' />

const IndexLogin = () => {
  const [value, setValue] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true)

  const dispatch = useDispatch<AppDispatch>()

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry)
  }
  const handleLogin = () => {
    const parameters = {
      email: value,
      password: password,
    }
    dispatch(login(parameters))
  }
  return (
    <Container padding={false}>
      <View style={styles.center}>
        <Image resizeMode='contain' source={{ uri: `${URL_HOST}/image/logo_login.png` }} style={styles.image} />
        <Text style={[styles.textTitle, { fontFamily: 'Poppins-Thin' }]}>Find a best</Text>
        <Text style={[styles.textTitle, { fontFamily: 'Poppins-Black' }]}>Taxi ride</Text>
        {/* <Text style={styles.textDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text> */}
        <Input
          size='large'
          multiline={true}
          style={styles.input}
          textStyle={{
            height: 38,
          }}
          placeholder='Tên đăng nhập'
          value={value}
          onChangeText={(valueUsername) => setValue(valueUsername)}
          accessoryLeft={
            <TouchableOpacity>
              <Icon name='person-outline' size={23} />
            </TouchableOpacity>
          }
        />
        <Input
          textStyle={{
            height: 38,
          }}
          style={styles.input}
          value={password}
          onChangeText={(valuePassword) => setPassword(valuePassword)}
          placeholder='Place your Text'
          accessoryLeft={
            <TouchableOpacity>
              <Icon name='key-outline' size={23} />
            </TouchableOpacity>
          }
          accessoryRight={
            <TouchableOpacity onPress={toggleSecureEntry}>
              {secureTextEntry ? <Icon name='eye-off-outline' size={23} /> : <Icon name='eye-outline' size={23} />}
            </TouchableOpacity>
          }
          secureTextEntry={secureTextEntry}
        />
        <ButtonLogin
          submit={handleLogin}
          text='Đăng nhập'
          // image={require('../../../assets/images/google_logo.png')}
          backgroundColor={Colors.pink}
          color={Colors.white}
          marginTop={30}
        />
        {/* <ButtonLogin
          text='Đăng nhập với Apple'
          image={require('../../../assets/images/apple_logo.png')}
          backgroundColor={Colors.dark}
          marginTop={10}
          color={Colors.white}
        /> */}
        <View style={styles.view_signUp}>
          <Text style={[styles.text_signUp, { color: Colors.dark }]}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity>
            <Text style={[styles.text_signUp, { color: Colors.white }]}>Đăng ký </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  )
}

export default IndexLogin

const styles = StyleSheet.create({
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  center: {
    // flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: 120,
    height: height * 0.1,
  },
  textTitle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 40,
  },
  textDescription: {
    fontFamily: 'Poppins-Light',
    color: Colors.white,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: width / 5,
  },

  view_signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  text_signUp: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
})
