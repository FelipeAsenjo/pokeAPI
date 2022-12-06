<template>
  <main class="min-h-screen bg-gradient-to-r from-red-600 via-yellow-500 to-red-600">
    <!-- set here the navbar and background picture -->
    <Navbar />
  
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'

</script>

<style scoped>

</style>
