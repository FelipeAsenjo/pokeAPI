<template>
    <div class="fixed z-30 h-screen w-full bottom-0" >
        <div class="relative h-full w-full">
            <div class="absolute h-full w-full bg-black opacity-70" />
            <div class="absolute z-20 h-full w-full">
                <button 
                    class="absolute right-10 top-10 text-6xl text-gray-300 hover:scale-125"
                    @click="resetPokemon"
                >
                    <img 
                        src="../assets/multiply-60.webp"
                        class="h-[60px] w-[60px]"
                        alt="close button"
                    />
                </button>
                <div class="flex justify-center items-center p-10 h-full w-full">
                    <div class="flex justify-center bg-white max-h-full w-auto max-w-screen-lg rounded-lg overflow-y-auto">
                        <!-- {{ selectedPokemon.name }} -->
                        <img 
                            class="h-[200px] w-[200px]"
                            :src="`${imgUrl}${selectedPokemon.id}.png`" 
                            :alt="selectedPokemon.name"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PokemonModal',
    props: {
        imgUrl: String,
    },
    methods: {
        resetPokemon() {
            this.$store.dispatch('resetSelectedPokemon')
        }
    },
    computed: {
        ...mapState({
            selectedPokemon: state => state.selectedPokemon
        })
    }
} 
</script>