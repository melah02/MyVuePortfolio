<script setup>
import ButtonContainer from './ButtonContainer.vue';


</script>

<template>

   <div class="contactMeContainer">
        <div class="contactDiv">
            <div class="text">
                <h1>Let's work together on your next project. </h1>
                <p>From concept to code, i'm dedicated to bringing your vision to life. </p>
            </div>
            <ButtonContainer>Contact Me</ButtonContainer>
        </div>
   </div>

</template>

<style scoped>
.contactMeContainer{
    max-width: 70%;
    height: 200px;
    display: flex;
    margin: 0 auto 40px auto;
    background-color: #ca2422;

}

.contactDiv{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    justify-content: space-between;
    
}

.text{
    max-width: 50%;
    
}
h1{
    color: white;
    font-weight: 700;
    line-height: 1.5rem;
}
p{
    color: white;
}

@media all and (max-width:760px){

    .contactDiv{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: space-between;
    
    }
    .text{
    max-width: 80%;
    
}
    h1{
        font-size: 15px;
        line-height: 15px;
    }
    p{
        font-size: 12px;
        margin-top: 10px;
    }
}


.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>