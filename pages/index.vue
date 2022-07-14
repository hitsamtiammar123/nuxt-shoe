<!-- eslint-disable vue/order-in-components -->
<template>
  <ProductList :loading="getFetchProductLoading" :products="products" title="Product List" />
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      data: []
    }
  },

  async fetch(){
    await this.$store.dispatch('fetchProduct');
  },

  computed: {
    products(){
      return this.$store.state.products;
    },
    productLoading(){
      return this.$store.state.productLoading;
    },
    getFetchProductLoading(){
      return this.$store.getters.getFetchProductLoading(this.$fetchState.pending);
    }
  },

  mounted(){
    this.$fetch();
  },
  fetchOnServer: false,
  methods: {},
}
</script>
