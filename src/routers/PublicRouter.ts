import ButtonTabsNavigations from '../../navigations/ButtonTabsNavigations'
import IndexAddress from '../components/Address'
import Checkout from '../components/Checkout'
import CheckoutSuccess from '../components/CheckoutSuccess'
import MyOrder from '../components/MyOrder'
import ProductDetail from '../components/ProductDetails'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { TypeRouter } from './../types/Types'
export default <TypeRouter[]>[
  // {
  //   component: Login,
  //   name: 'LoginScreen',
  //   options: {
  //     headerShown: false,
  //   },
  // },
  {
    component: ButtonTabsNavigations,
    name: 'bottom-tabs',
    options: {
      headerShown: false,
    },
  },
  {
    component: ProductDetail,
    name: 'detail-product',
    options: {
      headerShown: false,
    },
  },
  {
    component: Checkout,
    name: 'checkout-screen',
    options: {
      headerShown: false,
    },
  },
  {
    component: CheckoutSuccess,
    name: 'checkout-screen-success',
    options: {
      headerShown: false,
    },
  },
  {
    component: MyOrder,
    name: 'my-order-screen',
    options: {
      headerShown: false,
    },
  },
  {
    component: IndexAddress,
    name: 'address-screen',
    options: {
      headerShown: false,
    },
  },
]
