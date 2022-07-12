<template>
  <div id="main-content" class="mt-4 d-flex flex-row justify-content-center">
    <div class="d-flex flex-row col-10 flex-wrap">
    <b-card
      v-for="i in [1,2,3,4, 5, 6, 7,]"
      :key="i"
      tag="NuxtLink"
      title="Card Title"
      img-top
      to="/product/1"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      class="mb-3 card-item">
      <b-card-text class="text-card">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss">
  #main-content{
    flex-wrap: wrap;
  }

  .card-item{
    margin-right: 10px;
    width: calc(100% / 3 - 10px);
    color: black;
    max-height: 300px;

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
