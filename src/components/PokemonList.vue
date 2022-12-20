<template>
    <section class="my-5 w-5/6 max-w-2xl flex flex-row flex-wrap justify-center">
        <div 
            class="my-2 mx-auto w-40 h-40 text-center flex flex-col justify-center bg-gray-200 rounded-lg shadow-md md:mx-2"
            v-for="pokemon in pokemons" :key="pokemon.id" @click="showPokemon(pokemon.id)"
        >
                <img :src="`${imgUrl}${pokemon.id}.png`" class="w-24 mx-auto" />
                {{ pokemon.name[0].toUpperCase() + pokemon.name.substring(1) }}
        </div>
        <div 
            id="trigger" 
            ref="triggerOnScroll" 
            class="text-center self-center"
        >
            <vue-loaders-ball-beat 
                v-if="nextUrl"
                color="currentColor" scale="1" 
            />
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PokemonList',
    props: {
        imgUrl: String,
        pokemons: Object
    },
    methods: {
        showPokemon(id) {
            this.$store.dispatch('fetchPokeDetails', id)
        },
        initObserver() {
            const observer = new IntersectionObserver( entries => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0) {
                        this.$emit('scroll')
                    }
                })
            })

            observer.observe(this.$refs.triggerOnScroll)
        }
    },
    computed: {
        ...mapState({
            nextUrl: state => state.currentAPICall.next
        })
    },
    mounted() {
        this.initObserver()
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