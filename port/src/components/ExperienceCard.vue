<script setup>
import Container from './Container.vue';



const date = new Date();
date.getYear();
const year = (date + '').split(' ');
const experience = year[3] - 2020
</script>

<template>
 
        <Container>
                <div class="cardContainer">
                    <div class="experience">{{ experience }}<span> Years Experience</span></div>
                    <div class="cardsContent">
                        <div class="htmlCss">
                            <div class="html">HTML</div>
                            <div class="css">CSS</div>
                        </div>
                        <div class="javascriptVue">
                            <div class="javascript">JAVASCRIPT</div>
                            <div class="vue">VUEJS</div>
                        </div>
                    </div>
                </div>
        </Container>

  
</template>

<style scoped>

.experience{
    height: 200px;
    width: 250px;
    color: #ca2422;
    background-color: #2c2b2c ;
     display: flex;
     flex-direction: column;
     font-size: 2rem;
    align-items: center;
    text-align: center;
    font-weight: 900;
    justify-content: center; 
}

.experience span{
    font-size: 1.5rem;
}
.cardContainer{
    display: flex;
    margin:100px 0;
    justify-content: center;
    align-items: center;
    
}
.htmlCss{
    display: flex;
    justify-content: space-between;

}
.javascriptVue{
    display: flex;
    justify-content: space-evenly;
}

.html{
    height: 90px;
    width: 150px;
    background-color:#3d3b3d;
    color: #ca2422;
    display: flex;
    font-weight: 600;
    align-items: center;
    justify-content: center;
}

.css{
    height: 90px;
    width: 150px;
    font-weight: 600;
    margin-left:10px;
    background-color:#3d3b3d;
    color: #ca2422;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.javascript{
    height: 100px;
    width: 150px;
    background-color:#3d3b3d;
    color: #ca2422;
    font-weight: 600;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.vue{
    height: 100px;
    font-weight: 600;
    width: 150px;
    background-color:#3d3b3d;
    color: #ca2422;
     margin-top: 10px;
     margin-left:10px;
      display: flex;
    align-items: center;
    justify-content: center;
}

@media all and (max-width: 760px){
    .cardContainer{
        display: flex;
        margin:0 0;
        justify-content: center;
        align-items: center;
        transform: scale(0.7);
}
}





.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}

</style>