<script setup>
import image from '../assets/BlackAndRedBackground.jpg';
import Container from './Container.vue';
import ButtonContainer from './ButtonContainer.vue';
</script>

<template>
    <Container>
        <section>
                <div><img :src="image" alt="image"/></div>
            <Transition name="slideIn" appear>
                <div class="aboutContainer">
                    <span class="name">Hello, I'm Melah. </span>
                    <h1>Web Developer</h1>
                    <p>Code Magician, Weaving Digital Dreams. Turning Lines of code into Interactive Masterpieces.
                        Elevating User Experiences,One Click at a Time.
                    </p>
                    <ButtonContainer>Resume</ButtonContainer>    
                </div>
            </Transition>
        </section>
    </Container>
</template>

<style scoped>

section{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
span{
    color: #ca2422;
    font-weight: 600;
    font-size: 1.2rem;
}
h1{
    font-weight: 700;
    font-size: 2rem;
    color: white;
}
p{
     color: rgb(172, 172, 172);
     font-weight:500 ;
     margin-bottom: 20px;
}

img{
    max-width: 300px;
}

.aboutContainer{
    max-width: 500px;
    margin-left: 30px;
}

@media all and (max-width:760px){
    
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.aboutContainer{
    max-width: 500px;
    margin: 30px 0 0 0;
}


}

/* .man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
} */



.slideIn-enter-from{
    opacity: 0;
    margin-right: -200px;
}
.slideIn-enter-to{
    opacity: 1;
    margin-right: 0px;
}
.slideIn-enter-active{
    transition: all 1s ease;
}

</style>
