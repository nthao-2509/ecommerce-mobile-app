import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import cartService from './services/CartService'
import Toast from 'react-native-toast-message'

const initialState = {
  cartItems: undefined,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isError: false,
  isSuccess: false,
  isLoading: true,
}

export const selectCartFromLocal = createAsyncThunk('cart/local', async () => {
  try {
    const values = await AsyncStorage.getItem('cartItem')
    return values
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

export const selectCart = createAsyncThunk('cart/', async (idUser: string) => {
  try {
    return cartService.selectDataCartByUser(idUser)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    selectCartFromDB: (state: any, actions: any) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    },
    addToCart: (state: any, action: any) => {
      const cartItems = state.cartItems && JSON.parse(state.cartItems)
      const itemIndex = cartItems?.findIndex((item: any) => item?.idProduct === action?.payload?.idProduct)
      if (itemIndex >= 0) {
        cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        cartItems.push(tempProduct)
      }
      cartService.addToCart(cartItems)
      //   message.success('Thêm sản phẩm hành thành công')
      Toast.show({
        type: 'success',
        text1: 'Thông báo',
        text2: 'Thêm sản phẩm hành thành công',
      })
      AsyncStorage.setItem('cartItem', JSON.stringify(cartItems))
    },
    updateQuantity: (state: any, action: any) => {
      const cartItems = JSON.parse(state.cartItems)

      const itemIndex = cartItems.findIndex((item: any) => item.idProduct === action?.payload?.idProduct)
      if (itemIndex >= 0) {
        cartItems[itemIndex].cartQuantity -= 1
      }
      Toast.show({
        type: 'success',
        text1: 'Thông báo',
        text2: 'Giảm số lượng sản phẩm hành thành công',
      })
      //   message.success('Giảm số lượng sản phẩm hành thành công')
      cartService.addToCart(cartItems)
      AsyncStorage.setItem('cartItem', JSON.stringify(cartItems))
    },
    removeCartItem: (state: any, action: any) => {
      let cartItems: any = JSON.parse(state.cartItems)
      const removeItem = cartItems.filter((e: any) => e.idProduct !== action?.payload?.idProduct)
      cartItems = removeItem
      cartService.addToCart(cartItems)
      AsyncStorage.setItem('cartItem', JSON.stringify(cartItems))
      Toast.show({
        type: 'success',
        text1: 'Thông báo',
        text2: 'Xóa sản phẩm hành thành công',
      })
      //   message.success('Xóa sản phẩm hành thành công')
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(selectCart.pending, (state: any) => {
        state.isLoading = true
      })
      .addCase(selectCart.fulfilled, (state: any, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.cartItems = action.payload
      })
      .addCase(selectCart.rejected, (state: any, action: any) => {
        state.isLoading = false
        state.isError = true
        state.cartItems = []
      })
      //
      .addCase(selectCartFromLocal.pending, (state: any) => {
        state.isLoading = true
      })
      .addCase(selectCartFromLocal.fulfilled, (state: any, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.cartItems = action.payload ?? []
      })
      .addCase(selectCartFromLocal.rejected, (state: any, action: any) => {
        state.isLoading = false
        state.isError = true
        state.cartItems = []
      })
  },
})
export const { addToCart, updateQuantity, removeCartItem, selectCartFromDB } = cartSlice.actions
export default cartSlice.reducer
