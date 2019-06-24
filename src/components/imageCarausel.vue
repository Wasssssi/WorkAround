<template>
  <v-carousel>
      <v-carousel-item
        class="reduce-image-size"
        v-for="(item,i) in items"
        :key="i"
        :src="item.image"
      ></v-carousel-item>
    </v-carousel>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      items: []
    }
  },
   mounted(){
     axios
      .get('http://temp.dash.zeta.in/food.php')
      .then(response => (
        this.items = response.data.recipes
    ))
  }
}
</script>

<style lang="scss">
.reduce-image-size {
    width: 1000px;
    height: auto;
    margin: 0 0 0 19%;
}
</style>
