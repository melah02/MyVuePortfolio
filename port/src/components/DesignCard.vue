<script setup>
import ButtonContainer from './ButtonContainer.vue';
import Container from './Container.vue';

import {defineProps} from 'vue';

const {CardDetails} = defineProps(['CardDetails']);

</script>

<template>
    <Container>
        <div class="main-container">
            <div v-for="(cardDetail,i) in CardDetails "  :key="i"  class="cardContainer">
              <div :class="i === 1 ? 'card1' : 'card' ">
                  <h2>{{ cardDetail.title }}</h2>
                  <p>{{ cardDetail.description }}</p>
                  <ButtonContainer>Learn More</ButtonContainer>
              </div>
            </div>
        </div>
    </Container>
</template>

<style scoped>

.main-container{
    display: flex;
    justify-content: space-between;
   
}

.cardContainer{
    margin: 0 20px ;
    cursor: pointer;
    transition: all .2s ease ;
}
.cardContainer:hover{
   margin: 0 20px ;
   cursor: pointer;
   transition: all .2s ease ;
   transform: scale(1.03);
}
.card{
    background-color:#352e34 ;
    width: 250px;
    height: 250px;
    padding: 10px;
    
}
.card1{
    background-color:#ca2422;
    width: 250px;
    height: 250px;
    padding: 10px;
    
}
h2{
    color: white;
    font-weight: 700;
}
p{
    color: rgb(172, 172, 172);
    padding:5px 0 ;
    margin-bottom: 20px;
}
@media all and (max-width:760px){
.card{
    background-color:#352e34 ;
    width: 250px;
    height: 250px;
    padding: 10px;
    margin: 5px 0;
    
}

.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}

.cardContainer{
   margin: 10px 0 ;
   cursor: pointer;
}

}

.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>
