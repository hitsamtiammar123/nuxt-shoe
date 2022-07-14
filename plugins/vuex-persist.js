import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ favoriteProducts: state.favoriteProducts }),
  }).plugin(store);
}
