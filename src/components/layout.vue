<template>
  <div class="wrapper">
    <h1> Movie Name </h1>
    <v-text-field label="Enter Your Movie Name" v-model="movieName" id='name-input'/>
    <h1>Ratings</h1>
    <v-text-field label="Enter Your Ratings here" v-model="ratings" id='ratings-input'></v-text-field>
    <h1>Duration</h1>
    <v-text-field label="Mention Duration here" v-model="duration" id='duration-input'></v-text-field>
    <v-btn @click="getAllDetails" id='submit-button '> Submit </v-btn>
    <h1>Search</h1>
    <v-text-field label="Search your movie here" v-model='search' @input="showResults" id='search-input'></v-text-field>
      <div class='show-results' v-for="(items, index) in arr" :key="index" v-show="search === items.movieName" id='directory-table'>
      <div class="secondary-font">
        <h3>Name</h3>
         {{ items.movieName }}</div>
      <div class="secondary-font">
        <h3>Ratings</h3>
        {{ items.ratings }}</div>
      <div class="secondary-font">
        <h3>Duration</h3>
        {{ items.duration }}</div>
    </div>
    <div v-if="arr.length === 0">
      <v-card-text class="error-font" id='no-result'> No Movies Found..!  </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieName: '',
      ratings: null,
      duration: '',
      arr: [],
      search: ''
    }
  }, 
  methods: {
    getAllDetails() {
      const payload = {
        movieName: this.movieName,
        ratings: this.ratings,
        duration: this.duration
      }
      this.arr.push(payload);
      this.movieName = '';
      this.ratings = '';
      this.duration = '';
    }
  }
}
</script>


<style lang="scss">
.wrapper {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 500px;
  height: 500px;
  .show-results {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #fbfbfb
  }
}
</style>
