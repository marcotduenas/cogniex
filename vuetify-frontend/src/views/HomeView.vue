<template>
  <v-row no-gutters align="center" justify="center">
    <div class="home">
      <img alt="Vue logo" width="300" src="@/assets/home.svg">
      <HelloWorld msg="Welcome to Cogniex" />
    </div>
  </v-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
