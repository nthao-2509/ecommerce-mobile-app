import CartComponent from '../components/Cart'
import Favorites from '../components/Favorites'
import Home from '../screens/Home'
import Message from '../screens/Message'
import Order from '../screens/Order'
import Profile from '../screens/Profile'

export const RouteButtonTabs = [
  {
    name: 'home-screen',
    component: Home,
    icon: 'home-outline',
    badge: false,
  },
  {
    name: 'favorites-screen',
    component: Favorites,
    icon: 'star-outline',
    badge: false,
  },
  {
    name: 'order-screen',
    component: CartComponent,
    icon: 'cart-outline',
    badge: true,
  },
  {
    name: 'profile-screen',
    component: Profile,
    icon: 'person-outline',
    badge: false,
  },
]
