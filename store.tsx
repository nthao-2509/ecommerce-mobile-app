import { configureStore } from '@reduxjs/toolkit'
import LocationDevice from './src/features/Location'
import ProductPortfolioSlice from './src/features/ProductPortfolio'
import ProductSlice from './src/features/ProductSlice'
import AuthSlice from './src/features/AuthSlice'
import CartSlice from './src/features/CartSlice'
import wishListItemSlice from './src/features/FavoritesSlice'
export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    location: LocationDevice,
    productPortfolio: ProductPortfolioSlice,
    product: ProductSlice,
    cart: CartSlice,
    wishList: wishListItemSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
