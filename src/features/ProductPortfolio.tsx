import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductPortfolioService from './services/ProductPortfolio'

export interface TypeProductPortfolio {
  name: string
  code: string
  id: string
  created: Date
}

interface initialState {
  arrayProductPortfolio: TypeProductPortfolio[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
}
const initialState: initialState = {
  arrayProductPortfolio: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
}

export const selectAllProductPortfolio = createAsyncThunk('product_portfolio/all', async () => {
  try {
    return await ProductPortfolioService.getAllProductPortfolio()
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

export const ProductPortfolioSlice = createSlice({
  name: 'productPortfolio',
  initialState,
  reducers: {
    productPortfolioReducer: (state: any, action: { payload: TypeProductPortfolio[] }) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(selectAllProductPortfolio.pending, (state: initialState) => {
        state.isLoading = true
      })
      .addCase(selectAllProductPortfolio.fulfilled, (state: initialState, action: { payload: TypeProductPortfolio[] }) => {
        state.isLoading = false
        state.isSuccess = true
        state.arrayProductPortfolio = action.payload
      })
      .addCase(selectAllProductPortfolio.rejected, (state: initialState, action: { payload: TypeProductPortfolio[] }) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { productPortfolioReducer } = ProductPortfolioSlice.actions
export default ProductPortfolioSlice.reducer
