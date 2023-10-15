<script setup>
import About from '../components/About.vue';
import DesignCard from '../components/DesignCard.vue';
import ExperienceCard from '../components/ExperienceCard.vue';
import FeaturedProject from '../components/FeaturedProject.vue';
import ContactMeCard from '../components/ContactMeCard.vue';


const cardData = [
  {
    title:'Graphics Design',
    description:`Where Imagination Meets Pixels,Every Design Tells a Tale.Elevate Your Brand with Distinctive Graphics. Bringing Your Vision to Life, One Pixel at a Time`
  },
  {
    title:'Web Design',
    description:'Designing Digital Dreams. Transforming Concepts into Captivating Online Experiences. Elevate Your Web Presence with Innovative Design Solutions'
  },
  {
    title:'UI/UX',
    description:'Shaping Digital Delight: Where Aesthetics and User Experience Unite,Elevate Engagements with Design Solutions, Crafting Intuitive Interfaces'
  }
]


</script>

<template>
  <About/>
  <div class="cardFlex">
    <DesignCard :CardDetails="cardData"/>
  </div>
  <ExperienceCard/>
  <FeaturedProject/>
  <ContactMeCard/>
</template>

<style scoped>
  .cardFlex{
    display: flex;
    justify-content: space-evenly;
  }

  @media all and (max-width:760px){
     .cardFlex{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  }
</style>
