<script setup>
import Container from './Container.vue';
</script>

<template>
    <Container class="wrapper">

        <h1>About Me</h1>
        
        <Transition name="ptag" appear>
            
            <p>
                Hello, I'm Melah Elkanah, a passionate web developer with a focus on creating dynamic and engaging user interfaces.
                I have a deep love for crafting seamless experiences that bring ideas to life on the web. 
            </p>
        </Transition>
        
        <h1>Expertise</h1>
        <Transition name="ptag" appear>
            <p>
                With extensive experience in front-end development, i specialize in using Vue.js 
                to build rubust,interactive applications. I appreciate Vue.js for its elegant simplicity and its 
                ability to efficiently handle complex state management.
            </p>    
        </Transition>
        <h1>Phylosophy</h1>
        <Transition name="ptag" appear>
            <p>
                I firmly believe in the power of clean, maintainable code. I strive for pixel-perfect design and seamless user experiences. My approach combines a deep understanding of user needs with a commitment to the latest best practices in front-end development.
            </p>
        </Transition>
        
        
        <h1>Toolbox</h1>
        <Transition name="ptag" appear>
            <p>
                Languages: HTML5, CSS3, JavaScript (ES6+)
                <br>
                Frameworks: Vue.js, Vuex, Nuxt.js
                <br>
                Tools: Webpack, Git, npm/yarn
                <br>
                Testing: Jest, Vue Test Utils
            </p>
        </Transition>

        <h1>Personal Side</h1>
        <Transition name="ptag" appear >
            <p>
                When I'm not coding, you can find me redaing or gaming. 
                I believe that efficiency and productivity are crucial for long-term succes, and I take pride in producing code that is easy to understand and also work with.
                I value teamwork and believe in fostering a positive and inclusive work environment where ideas can flow freely.
            </p>
        </Transition>
        
        <h1>Get in Touch</h1>
        <Transition name="ptag"  appear>
            <p>
                
                I'm always excited to collaborate on new projects or discuss web development. Feel free to reach out to me via [email address] or connect with me on [LinkedIn or Twitter].
                
                Let's build something amazing together!
            </p>
        </Transition>
    </Container>
</template>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;

}


h1{
    font-size: 3rem;
    color: #ca2422;
    margin-top: 4rem;
}

p{
    max-width: 700px;
    font-size: 1.2rem;
    text-align: center;
    color: white;
}

.ptag-enter-from{
    opacity: 0;
}
.ptag-enter-to{
    opacity: 1;
    
}
.ptag-enter-active{
    transition: all 1.5s ease-in;
}

</style>
