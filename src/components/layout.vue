<template>
<div>
  <Header /> 
  <imageCarausel />
  <Content /> 
</div>
</template>

<script>
import Content from './content';
import Header from './header'
import imageCarausel from './imageCarausel'

export default {
  name: 'main-layout',
  components: {
    Content, 
    Header,
    imageCarausel
  },
}
</script>

