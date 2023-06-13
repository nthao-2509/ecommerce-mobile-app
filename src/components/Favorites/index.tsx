import { View, Text } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../store'
import { selectCartFromLocal } from '../../features/CartSlice'
import { selectFavorites } from '../../features/FavoritesSlice'
import CartItem from '../Cart/CartItem'

const Favorites = () => {
  const { wishListItem, isLoading } = useSelector((state: any) => state.wishList)
  const dispatch = useDispatch<AppDispatch>()
  React.useEffect(() => {
    dispatch(selectFavorites())
  }, [dispatch])
  return (
    <Container>
      <Header title='Yêu thích' />

      {!isLoading && wishListItem.length > 0 && (
        <>
          {JSON.parse(wishListItem)?.map((item: any) => {
            return (
              <View key={item.idProduct}>
                <CartItem item={item} favorite={true} />
              </View>
            )
          })}
        </>
      )}
    </Container>
  )
}

export default Favorites
