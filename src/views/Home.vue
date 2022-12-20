<template>
  <section class="relative flex flex-col items-center min-h-screen">
    <Header @click="$store.dispatch('resetSelectedPokemon')" />
    <Searchbar />
    <PokemonList 
      :imgUrl="imgUrl" 
      :pokemons="pokemons"
      @scroll="nextPage"
    />
    <Modal 
      v-if="selectedPokemon" 
      :imgUrl="imgUrl"
    />
    <!-- <Modal v-if="true" /> -->
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Header from '../components/Header.vue'
import Searchbar from '../components/Searchbar.vue'
import PokemonList from '../components/PokemonList.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Searchbar,
    PokemonList,
    Modal
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
      selectedPokemon: state => state.selectedPokemon,
    })    
  },
  mounted() {
    this.$store.dispatch('fetchAPI')
  }
}
</script>
