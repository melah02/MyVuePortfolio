<script setup>
import next from '../assets/next.svg'
import prev from '../assets/prev.svg'
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import ButtonContainer from './ButtonContainer.vue'

import audio from '../assets/alan.mp3'
import audio1 from '../assets/alan1.mp3'
import audio2 from '../assets/alan2.mp3'
import audio3 from '../assets/alan3.mp3'
import audio4 from '../assets/alan4.mp3'

import {ref,watch,computed} from 'vue';

const currentSongIndex = ref(0)
const isplaying = ref(false);

const songs = ref([ audio,audio1,audio2,audio3,audio4]);
    
    const audio1Sound = computed(() => {
      return new Audio(songs.value[currentSongIndex.value]);
    });

    
    watch(currentSongIndex, () => {
      audio1Sound.value = new Audio(songs.value[currentSongIndex.value]);
    });

  


const handlePlay = () =>{
    isplaying.value = !isplaying.value;
    if(isplaying){
        audio1Sound.value.play();
        isplaying.value = true;
    }
    
}



const handlePause = () =>{
    isplaying.value = !isplaying.value
    
    if(isplaying){
        audio1Sound.value.pause();
        isplaying.value = false;
    }
    
}
const handlePrev = () =>{    
    handlePause();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    if (currentSongIndex.value === 0){
        currentSongIndex.value = songs.value.length - 1;
        audio1Sound.value = new Audio(songs.value[currentSongIndex.value]);
        handlePlay();
    }else{
        currentSongIndex.value = currentSongIndex.value - 1;
        audio1Sound.value = new Audio(songs.value[currentSongIndex.value]);
        handlePlay();
    }
    
    
}


const handleNext = () =>{
    audio1Sound.value.pause();
    currentSongIndex.value = currentSongIndex.value + 1;
    if (currentSongIndex.value <= songs.value.length - 1){
        audio1Sound.value = new Audio(songs.value[currentSongIndex.value]);
        handlePlay();
    }else{
        currentSongIndex.value = 0;
        audio1Sound.value = new Audio(songs.value[currentSongIndex.value]);
        handlePlay();
    }
   
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