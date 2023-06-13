import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  wishListItem: [],
  isLoading: true,
  isSuccess: false,
}

export const selectFavorites = createAsyncThunk('favorites/local', async () => {
  try {
    const values = await AsyncStorage.getItem('favorites')
    return values
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

const wishListItemSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToWishList: (state: any, action: any) => {
      const favoritesItems = JSON.parse(state.wishListItem)
      const itemIndex = favoritesItems?.findIndex((item: any) => item.idProduct === action.payload.idProduct)
      if (itemIndex >= 0) {
        // message.error('Sản phẩm đã có trong danh sách yêu thích')
      } else {
        // message.success('Thêm sản phẩm yêu thích thành công')
        favoritesItems.push(action.payload)
        AsyncStorage.setItem('favorites', JSON.stringify(favoritesItems))
      }
    },
    removeWishList: (state: any, action: any) => {
      let favoritesItems = JSON.parse(state.wishListItem)
      const removeItem = favoritesItems.filter((e: any) => e.idProduct !== action.payload.idProduct)
      favoritesItems = removeItem
      AsyncStorage.setItem('favorites', JSON.stringify(favoritesItems))
      //   message.success('Xóa sản phẩm hành thành công')
    },
  },
  extraReducers(builder) {
    builder
      .addCase(selectFavorites.pending, (state: any) => {
        state.isLoading = true
      })
      .addCase(selectFavorites.fulfilled, (state: any, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.wishListItem = action.payload ?? []
      })
      .addCase(selectFavorites.rejected, (state: any, action: any) => {
        state.isLoading = false
        state.isError = true
        state.wishListItem = []
      })
  },
})

export const { addToWishList, removeWishList } = wishListItemSlice.actions
export default wishListItemSlice.reducer
