<template>
  <div>
  <v-card-text> 
    <div class="flex-display">
    <div><h3>Select categories</h3></div> 
    <v-spacer></v-spacer>
    <div>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="grey"
            dark
            v-on="on"
            flat
          >
            Filter
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in categoryResponse"
            :key="index"
            @click="filterCategory(item.name)"
          >
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div> 
    </div>
    </v-card-text>
    <div class="category-chips">
      <v-chip label color="grey" v-for="(category, index) in categoryResponse " :key="index" text-color="black" outline @click="filterCategory(category.name)"> <img />  {{ category.name }}</v-chip>
    </div>
    <div class="image-display">
       <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="card in result" :key="card.name" v-bind="{ [`xs${flex}`]: true }">
                <v-card>
                  <v-img :src="card.image" height="400px" width="auto">
                    <v-container ill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-actions>
                    <h3> {{ card.name }}</h3> 
                    <v-spacer></v-spacer>
                    <h3 class="secondary-font no-effects">price: {{ card.price }}</h3>
                    <v-spacer></v-spacer>
                    <v-btn color="green" @click="updateCart">
                      Add to Bag
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text v-if="result && result.length === 0" class="error-font"> There is nothing to show in your filter </v-card-text>
        </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categoryResponse: null,
      recipies: null,
      result: null,
      flex: 4,
    }
   
  },
    
  methods: {
    filterCategory(category){
     var categories =  this.recipies && this.recipies.filter(item => {
        return item.category === category;
      })
      this.result = categories;
    },
    increaseCart() {
      this.$store.commit('GET_COUNTER_VALUE')
    },
    updateCart() {
      this.$store.dispatch('UPDATE_CART_WITH_FOOD_ITEMS')
    }
  },
  mounted(){
     axios
      .get('http://temp.dash.zeta.in/food.php')
      .then(response => (
        this.categoryResponse = response.data.categories,
        this.recipies = response.data.recipes,
        this.result = response.data.recipes
    ))
  }
}
</script>

<style lang="scss">
.category-chips {
  margin: 0 0 0 22px;
}
</style>
