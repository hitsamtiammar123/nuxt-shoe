<template>
  <b-row v-if="!getFetchProductLoading" class="product">
    <div class="d-flex flex-column">
      <img class="product-image" :src="product.image_url" />
      <b-button class="mt-2" variant="primary">Add to favorite</b-button>
    </div>
    <div class="ml-5 d-flex flex-column product-detail">
      <h2>{{product.name}}</h2>
      <h3 class="mt-2">Rp. {{$numbro(product.price).format({thousandSeparated: true}) }}</h3>
      <div class="product-sub-description">
        <div class="item">
          <span class="heading">Category:</span>
          <span class="description">{{product.category}}</span>
        </div>
        <div class="item">
          <span class="heading">Created at:</span>
          <span class="description">{{$moment(product.createdAt).format('DD MMMM YYYY')}}</span>
        </div>
        <div class="d=flex flex-column item">
          <span class="heading">Description:</span>
          <p>{{product.description}}</p>
        </div>
      </div>
    </div>
  </b-row>
  <div v-else>
    Loading...
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    }
  },
  fetchOnServer: false,
  async fetch(){
    const products = await this.$store.dispatch('fetchProduct');
    const id = this.$route.params.id;
    const product = products.find(item => item.id === Number(id));
    this.product = product;
  },
  computed: {
    getFetchProductLoading(){
      return this.$store.getters.getFetchProductLoading(this.$fetchState.pending);
    }
  },

}
</script>

<style lang="scss">
  .product{
    display: flex;
    .product-image{
      width: 250px;
      height: 300px;
      object-fit: cover;
    }

    .product-detail{
      flex: 1;
      h2{
        font-size: 25px;
        font-weight: bold;
      }

      h3{
        font-size: 20px;
      }

      .product-sub-description{
        margin-top: 20px;
        .item{
          margin-bottom: 10px;
          .heading{
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
