<template>
  <section class="h-1/3 flex flex-col items-center">
    <Header @click="nextPage" />
    <Searchbar />
    <PokemonList 
      :imgUrl="imgUrl" 
      :pokemons="pokemons"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Header from '../components/Header.vue'
import Searchbar from '../components/Searchbar.vue'
import PokemonList from '../components/PokemonList.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Searchbar,
    PokemonList
  },
  data() {
    return {
      imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      selectedPokemon: ''
    }
  },
  methods: {
    nextPage() {
      this.$store.dispatch('fetchNextPage')
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
