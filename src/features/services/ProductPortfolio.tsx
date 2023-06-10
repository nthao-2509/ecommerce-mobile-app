import axios from 'axios'
import { URL_SERVER } from '../../helpers/UrlServer'
const getAllProductPortfolio = async () => {
  const response = await axios.get(`${URL_SERVER}/select-product-portfolio`)
  return response.data.data
}

const ProductPortfolioService = {
  getAllProductPortfolio,
}
export default ProductPortfolioService
