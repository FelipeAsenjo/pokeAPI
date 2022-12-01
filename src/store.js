import { createStore } from "vuex";

const store = createStore({
    state: {
        pokemons: []
    },
    getters: {

    },
    mutations: {
        storePokemon(state, payload) {
            state.pokemons = payload
        }
    },
    actions: {
        async fetchAPI({ commit, state }) {
            if(state.pokemons.length === 0) {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon')
                const pokemon = await res.json() 

                console.log(pokemon.results)
                commit('storePokemon', pokemon.results)
            }

            return
        }
    }
})

export default store