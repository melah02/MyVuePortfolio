<script setup>
import next from '../assets/next.svg'
import prev from '../assets/prev.svg'
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import ButtonContainer from './ButtonContainer.vue'

import audio from '../assets/Akon_blame.mp3'
import audio1 from '../assets/Airplanes.mp3'
import audio2 from '../assets/Stuttering.mp3'

import {ref,watch} from 'vue';

const currentSongIndex = ref(1)
const isplaying = ref(false);

const songs = ref([ audio,audio1,audio2]);

var audioSound = new Audio(songs.value[currentSongIndex.value]);


const handlePlay = () =>{
    isplaying.value = !isplaying.value
    
    if(isplaying){
        audioSound.play();
        isplaying.value = true;
    }
    
}



const handlePause = () =>{
    isplaying.value = !isplaying.value
    
    if(isplaying){
        audioSound.pause();
        
        isplaying.value = false;
    }
    
}
const handlePrev = () =>{
   
    if (currentSongIndex.value < songs.value.length - 1){
        audioSound.pause()
        currentSongIndex.value = currentSongIndex.value--;
    }
    
    handlePlay();
}


const handleNext = () =>{
     if (currentSongIndex.value < songs.value.length - 1){
        audioSound.pause()
        currentSongIndex.value = currentSongIndex.value++;
    }else{
        currentSongIndex.value = 0;
    }
    handlePlay();
}


</script>

<template>
    
    <section>
        <div class="musicContainer">
            <ButtonContainer>
                <div class="musicButtons">
                    <img @click="handlePrev" :src="prev" alt="music" />
                    <div>
                        <img @click="handlePlay" v-if="!isplaying" :src="play" alt="music" />
                        <img @click="handlePause" v-else :src="pause" alt="music" />
                    </div>
                    <img @click="handleNext" :src="next" alt="music" />
                </div>
            </ButtonContainer>
        </div>
    </section>


</template>

<style scoped>

.musicContainer{
    position:fixed;
    z-index: 2;
    top: 90%;
    left: 0;
}

.musicButtons{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.musicButtons div{
    display: flex;
}
</style>