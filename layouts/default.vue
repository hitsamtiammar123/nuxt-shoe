<template>
  <div>
    <Header />
    <b-container class="py-5">
      <Nuxt />
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s, transform 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(-200px)
}
</style>
