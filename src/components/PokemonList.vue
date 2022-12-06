<template>
    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id" @click="fetchPokemonDetails(pokemon.id)">
            <img :src="`${imgUrl}${pokemon.id}.png`" class="w-24"/>
            {{ pokemon.id}}
            {{ pokemon.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PokemonList',
    data() {
        return {

        }
    },
    props: {
        imgUrl: String,
        pokemons: Object
    },
    methods: {
        fetchPokemonDetails(id) {
            this.$store.dispatch('fetchPokeDetails', id)
        }
    },
    computed: {
        async renderPokemons() {
            console.log(this.pokemons)
            // fetch
        }
    },
    updated() {
        this.pokemons.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/').filter( x => !!x).pop()
        })
    }
}
</script>

<style scoped>

</style>