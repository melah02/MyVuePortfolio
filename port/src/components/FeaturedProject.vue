<script setup>
import ButtonContainer from './ButtonContainer.vue';
import FeaturedCard from './FeaturedCard.vue';
import image1 from '../assets/pic.jpg'
import image2 from '../assets/quiz.jpg'


const featuredCardData = [
    {
        image:image1,
        title:'Notes App',
        link:'https://monumental-cranachan-5243c9.netlify.app/'
    },
    {
        image:image1,
        title:'Quiz App',
        link:'https://spiffy-banoffee-58d142.netlify.app/ '
    },
    {
        image:image1,
        title:'Food App',
        link:''
    },
    {
        image:image1,
        title:'Instagram Clone',
        link:'' 
    },
 
]

</script>

<template>

    <div class="featuredProjectContainer">
        <div class="featuredProjectButton">
            <h1>Featured Projects</h1>
            <ButtonContainer>View All</ButtonContainer>
        </div>
        <div class="cardContainer">
            <FeaturedCard :cardData="featuredCardData"/>
        </div>
    </div>

</template>

<style scoped>

.cardContainer{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5rem;
    margin: 2rem;
}

.featuredProjectContainer{
    /* background-color: #ca2422; */
    display: flex;
    max-width: 70vw;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    height: auto;
    justify-content: center;
}
.featuredProjectButton{
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 50vw;
    justify-content: space-between;
}
h1{
    font-size: 35px;
    color: white;
}
@media all and (max-width: 760px){

    h1{
        font-size: 20px;
    }

    .cardContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.featuredProjectContainer{
    max-width: 90vw;
}
} 


.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>