<template>
  <v-app>
    <v-content>
      <layout/>
    </v-content>
  </v-app>
</template>

<script>
import '@/styles/common.scss';
import layout from './components/layout'

export default {
  name: 'App',
  components: {
    layout
  },
  data () {
    return {
      //
    }
  }
}
</script>
