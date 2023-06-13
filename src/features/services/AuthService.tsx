import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_SERVER } from '../../helpers/UrlServer'
import Toast from 'react-native-toast-message'

const getData = async () => {
  const response: any = await AsyncStorage.getItem('user')
  return response
}
const register = async (userData: any) => {
  const response = await axios.post(URL_SERVER + '/sign-up', userData)
  if (response.data) {
    await AsyncStorage.setItem('user', JSON.stringify(response.data))
    // window.location.href = '/sign-in'
  }
  return response.data
}
const login = async (userData: any) => {
  const response = await axios.post(URL_SERVER + '/sign-in', userData)

  if (response.data) {
    if (response.data.message === 'success' && response.data.role === 'buyer') {
      Toast.show({
        type: 'success',
        text1: 'Thông báo',
        text2: 'Đăng nhập thành công',
      })
      await AsyncStorage.setItem('user', JSON.stringify(response.data))
    }
  }
  return response.data
}

const logout = () => {
  AsyncStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  getData,
}
export default authService
