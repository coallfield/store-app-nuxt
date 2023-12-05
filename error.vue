<template>
    <div class="error-contaier">
        <div class="error-info">
            <h1>Error {{ error.statusCode }}</h1>
            <h2>{{ error.message }}</h2>
            <NuxtLink to="/">GO HOME</NuxtLink>
        </div>
        
    </div>
</template>


<script setup>
    const props = defineProps({
        error: {
            type: Object
        }
    })
</script>


<style scoped>
a {
    margin-top: 10px;
  text-decoration: underline;
  color: white;
}
.error-contaier {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    width: 100%;

}
.error-info {
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    background-color: brown;
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 25px;
}
</style>