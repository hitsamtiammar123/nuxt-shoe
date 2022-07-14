<template>
  <ProductList :products="products" title="My Favorite Product" />
</template>

<script>
export default {
  name: 'NuxtFavoriteProduct',
  computed: {
    products(){
      return this.$store.state.favoriteProducts;
    }
  }
}
</script>

<style>

</style>
