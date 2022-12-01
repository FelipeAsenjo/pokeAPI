<template>
  <h1>Hello from home</h1>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      img: this.pokemons
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemons
    })    
  },
  mounted() {
    this.$store.dispatch('fetchAPI')
  }
}
</script>

<style scoped>

</style>
