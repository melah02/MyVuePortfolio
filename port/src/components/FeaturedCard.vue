<script setup>
import ButtonContainer from './ButtonContainer.vue';


import {defineProps} from 'vue'

const {cardData} = defineProps(['cardData'])

</script>

<template>
    <div v-for="(card,i) in cardData" :key="i" class="wrapper">
        <div  class="cardContainer">
            <div class="imgContainer">
                <img :src="card.image" alt="featuredImage"/>
            </div>
            <h2>{{ card.title }}</h2>
            <ButtonContainer class="button"><a :href="card.link">Know More</a></ButtonContainer>
        </div>
    </div>
</template>

<style scoped>

a{
    text-decoration: none;
    color: white;
}

img{
    width: 100%;
    height: 250px;
}
.cardContainer{
    
    background-color: #352e34;
}
h2{
    margin: 10px 5px;
    color: white;
}
.button{
    margin: 0 0 5px 5px;
}
@media all and (max-width:760px){
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    h2{
    margin: 5px 0;
    }
    .cardContainer{
    width: 100%;
    
    }
img{
    width: 100%;
    height: 200px;
}
}
.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>