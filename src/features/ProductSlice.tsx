import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductService from './services/ProductService'

export interface TypeProduct {
  idUser: string
  idProduct: string
  slug: string
  address: string
  nameProduct: string
  detailProduct: string
  images: string[]
  priceProduct: string | number
  thongSoKyThuat: {
    dongSanPham: string
    hangSanPham: string
    namDangKy: string
    tinhTrangBaoHanh: string
    xuatXu: string
  }
}
interface initialState {
  arrayProduct: TypeProduct[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
}
const initialState: initialState = {
  arrayProduct: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
}

export const selectAllProduct = createAsyncThunk('product/all', async () => {
  try {
    return await ProductService.getAllProduct()
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productReducer: (state: initialState) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(selectAllProduct.pending, (state: initialState) => {
        state.isLoading = true
      })
      .addCase(selectAllProduct.fulfilled, (state: initialState, action: { payload: TypeProduct[] }) => {
        state.isLoading = false
        state.isSuccess = true
        state.arrayProduct = action.payload
      })
      .addCase(selectAllProduct.rejected, (state: initialState) => {
        state.isLoading = false
        state.isError = true
      })
  },
})
export const { productReducer } = ProductSlice.actions
export default ProductSlice.reducer
