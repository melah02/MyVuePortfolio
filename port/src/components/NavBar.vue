<script setup>
import {ref} from 'vue';

const isActive = ref(false);

const toggleHandler = ()=>{
isActive.value = !isActive.value;
}


</script>

<template>
  <nav class="nav">
    <div class="logo">M</div>
    <ul :class="!isActive ? 'ul' : 'active' ">
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
    </ul>
    <div @click="toggleHandler"  class="hamburgerContainer">
        <div :class="isActive ? 'firstToggle': 'first' "  style="{}" ></div>
        <div :class="isActive ? 'secondToggle' : 'second' "></div>
       
    </div>
  </nav>

</template>

<style scoped>
.nav{
    background-color: #352e34;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 4rem;
    width: 100%;
}
.logo{
     color:#d44a47;
     font-size: 2rem;
     font-weight: 700;
}

.nav ul{
    display: flex;
    justify-content: space-between;
}

.nav ul li{
    list-style: none;
    margin:0 10px ;
    color: white;
}
.hamburgerContainer{
    display: none;
}




@media all and (max-width:760px){
.nav ul.ul{
    display:flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    background-color:#352e34;
    height: 80vh;
    width: 70vw;
    left: -1000px;
    align-items: center;
    padding: 0;
    justify-content: space-around;
     transition: all .6s ease;
}
.nav ul.active{
    display:flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    background-color:#352e34;
    height: 80vh;
    width: 70vw;
    left: 0;
    align-items: center;
    padding: 0;
    justify-content: space-around;
     transition: all .6s ease;
}

.nav ul li{
font-size: 1.5rem;
font-weight: 400;
}
.nav ul li:hover{
font-size: 1.5rem;
font-weight: 600;
}

.hamburgerContainer{
    display: block;
    transition: all .6s ease;

}

.hamburgerContainer .first{
    height: 5px;
    width: 40px;
    margin-bottom: 5px;
    background-color: #7e797d;
    transition: all .4s ease;
}
.hamburgerContainer .second{
    height: 5px;
    background-color: #666265;
    width: 20px;
    transition: all .4s ease;
}
.hamburgerContainer .firstToggle{
    height: 5px;
    width: 40px;
    margin-bottom: 5px;
    background-color: #7e797d;
    transform: translateY(5px) rotate(45deg);
    transition: all .6s ease;
}
.hamburgerContainer .secondToggle{
    height: 5px;
    transform: translateY(-5px) rotate(-45deg);
    background-color: #7e797d;
    width: 40px;
    transition: all .6s ease;
}





}
.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>
