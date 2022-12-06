import { createStore } from "vuex";

const store = createStore({
    state: {
        pokemons: [],
        currentAPICall: {},
        selectedPokemon: {}
    },
    getters: {

    },
    mutations: {
        storePokemon(state, payload) {
            state.pokemons = payload
        },
        storeCurrentAPICall(state, payload) {
            state.currentAPICall = payload
        },
        storeNextPokemon(state, payload) {
            state.pokemons.concat(payload)
        },
        storePokemonDetails(state, payload) {
            state.selectedPokemon = payload
        }
    },
    actions: {
        async fetchAPI({ commit, state }) {
            if(state.pokemons.length === 0) {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
                const pokemon = await res.json() 

                console.log(pokemon)
                commit('storeCurrentAPICall', pokemon)
                commit('storePokemon', pokemon.results)
            }

            return
        },
        async fetchNextPage({ commit, state }) {
            const res = await fetch(state.currentAPICall.next)
            const nextPokemon = await res.json()

            console.log('next', nextPokemon)
            commit('storeCurrentAPICall', nextPokemon)
            commit('storeNextPokemon', nextPokemon.results)
        },
        async fetchPokeDetails({ commit, state }, payload) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${payload}`)
            const pokemonDetails = await res.json() 

            console.log(pokemonDetails)
            commit('storePokemonDetails', pokemonDetails.results)
        }
    }
})

export default store