<script setup>
import MusicApp from './components/MusicApp.vue';
import NavBar from './components/NavBar.vue';
import {RouterView} from 'vue-router'
</script>

<template>
    <NavBar/>
    <RouterView/>
    <MusicApp/>
</template>

<style scoped>
.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>
