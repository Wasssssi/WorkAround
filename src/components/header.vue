<template>
     <v-flex class="flex-4">
                <v-layout row wrap >
                  <v-flex xs3> 
                    <img class="img-alignment" src="http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png"/> 
                      <span class="location">WORK 7th Floor, Tower D, IBC Knowledge Park .... </span>
                  </v-flex>
                  <v-flex xs3></v-flex>
                  <v-flex xs2>
                  <v-text-field
                  label="Search"
                  color="#ff8000"
                  prepend-icon="search"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs2>
                  <v-card-text>
                    <p class="cart-alignment"> {{ counter }}  in  Cart</p>
                  </v-card-text>
                </v-flex>
                <v-flex xs2>
                    <v-btn class="btn" @click="removeItems" color="green">Remove items</v-btn>
                </v-flex>
                </v-layout>
                </v-flex>
      </template>
<script>
import { mapGetters } from "vuex";


export default {
  name: 'header',
  computed: {
     counter() {
      return this.$store.getters.counter
    }
  },
  methods: {
    removeItems() {
      if(this.counter !== 0) {
      this.$store.dispatch('REMOVE_ITEMS_FROM_CART');
      }
    }
  }
}
</script>
<style lang="scss">
.img-alignment {
    width: 45px;
    height: 45px;
    margin: 7px 13px 0 17px;
}
.location {
   margin: 0 0 0 21px;
    }
.cart-alignment {
   margin: 15px 0 0 75px;
}
.btn {
    margin: 21px 0 0 0;
    transform: translate(-107%, 0);
}
</style>

