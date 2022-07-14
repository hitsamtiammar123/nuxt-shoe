<template>
 <b-navbar sticky variant="primary" type="dark">
    <b-navbar-brand to="/" tag="NavLink" class="mb-0">Ecommerce Hehe</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
        <b-nav-item to="/favorite-product" tag="NavLink">
          Favorite Product
        </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'NuxtHeader',
}
</script>
