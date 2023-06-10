import axios from 'axios'
import { URL_SERVER } from '../../helpers/UrlServer'
const getAllProduct = async () => {
  const response = await axios.get(`${URL_SERVER}/select-product`)
  return response.data.data
}

const ProductService = {
  getAllProduct,
}
export default ProductService
