import axios from 'axios'
import { URL_SERVER } from '../../helpers/UrlServer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const addToCart = async (cartItems: any) => {
  const userData: string | null = await AsyncStorage.getItem('user')
  if (userData) {
    const { idUser } = JSON.parse(userData)
    const parameters = {
      cartItems: cartItems,
      idUser,
    }
    const response = await axios.post(URL_SERVER + '/add-to-cart', parameters)
    return response.data
  }
}
const selectDataCartByUser = async (idUser: string) => {
  try {
    const response = await axios.post(URL_SERVER + '/select-data-cart', {
      idUser,
    })
    return response.data
  } catch (error) {}
}

const cartService = {
  addToCart,
  selectDataCartByUser,
}
export default cartService
