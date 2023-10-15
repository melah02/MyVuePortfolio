<script setup>

</script>

<template>

    <button class="button">
        <slot>

        </slot>
    </button>
</template>

<style scoped>
.button{
    
    border: none;
    background-color: #8a0f0d;
    color: white;
    padding: 8px 15px;
    box-shadow: 1px 1px 15px 4px #ca2422 ;
}
.button:hover{
    border: none;
    background-color: #a71715;
    color: white;
    padding: 8px 15px;
    cursor: pointer;
    box-shadow: 1px 1px 15px 4px #ca2422 ;
}
.man{
    background-color: #121216;
    background-color: #ca2422;
    background-color: #352e34;
}
</style>