import { MutationTree } from 'vuex'
import ProductState from './ProductState'
import * as types from './mutation-types'

const mutations: MutationTree <ProductState> = {
  [types.PRODUCT_ADD_TO_CACHED_MULTIPLE] (state, payload) {
    // TODO
    if (payload.products) {
      payload.products.forEach((product: any) => {
        state.cached[product.productId] = product
      });
    }
  },
}
export default mutations;