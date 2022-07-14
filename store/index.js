export const state = () => ({
  products: [],
  productLoading: false,
})

export const getters = {
  getProducts(state) {
    return state.products
  },
  getProductLoading(state){
    return state.productLoading
  },
  getFetchProductLoading: (state) => (pending) => {
    return state.productLoading || (pending && state.products.length === 0)
  }
}

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  toggleProductLoading(state){
    state.productLoading = !state.productLoading;
  }
}

export const actions = {
  async fetchProduct({ commit, state }){
    commit('toggleProductLoading');
    try{
      if(state.products.length === 0){
        const resData = await this.$axios.get('db.json');
        commit('setProducts', resData.data.product);
        return resData.data.product;
      }
    }catch(e){
      this.error(e);
    } finally{
      commit('toggleProductLoading');
    }
    return state.products;
  }
}
