<template>
  <section class="h-1/3 flex flex-col items-center">
    <Header />
    <Searchbar />
    <PokemonList 
      :imgUrl="imgUrl" 
      :pokemons="pokemons"
      @scroll="nextPage"
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
    }
  },
  methods: {
    nextPage() {
      this.$store.dispatch('fetchNextPage')
    }
  },
  computed: {
    ...mapState({
      pokemons: state => state.pokemons,
      selectedPokemon: state => state.selectedPokemon
    })    
  },
  mounted() {
    this.$store.dispatch('fetchAPI')
  }
}
</script>
