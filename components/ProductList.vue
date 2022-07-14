<template>
    <div class="d-flex flex-column product-list">
      <h2 class="text-left mb-5 text-primary main-title">{{title}}</h2>
      <div v-if="!loading" class="d-flex flex-row col-10 flex-wrap justify-content-start">
        <b-card
          v-for="item in products.slice(0, limit)"
          :key="item.id"
          tag="NuxtLink"
          :title="item.name"
          img-top
          :to="'/product/' + item.id"
          :img-src="item.image_url"
          img-alt="Image"
          class="mb-3 card-item">
          <b-card-text class="text-card">
            {{item.description}}
          </b-card-text>
        </b-card>
      </div>
      <b-button v-if="checkLimit" variant="primary" @click="addLimit">Load More</b-button>
    </div>
</template>
<script>
export default {
  name: 'NuxtProductList',
  props: {
    title: {
      type: String,
      default: '',
    },
    products: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      limit: 10,
      increment: 30
    }
  },
  computed: {
    checkLimit(){
      return this.limit < this.products.length
    }
  },
  methods: {
    addLimit(){
      if(this.checkLimit){
        this.limit += this.increment;
      }
    }
  }
}
</script>

<style lang="scss">
  .main-title{
    font-weight: bold;
  }

  .product-list{
    flex-wrap: wrap;
    align-items: center;
  }

  .card-item{
    margin-right: 10px;
    width: calc(100% / 3 - 10px);
    color: black;
    min-height: 200px;

    .card-img-top{
      height: 60%;
      width: 100%;
      object-fit: contain;
    }

    .text-card{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  .card-item:hover{
    color: black;
    text-decoration: none;
  }

  @media screen and (max-width:768px) {
    .card-item{
      width: calc(100% / 2 - 10px);
    }
  }

    @media screen and (max-width:425px) {
    .card-item{
      width: calc(100% - 10px);
    }
  }

</style>
