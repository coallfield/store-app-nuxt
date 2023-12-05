<template>
    <div class="product-page">
        <FullProduct :product="product"></FullProduct>
        <SimilarProducts :product="product" :id="id"></SimilarProducts>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const singleProductURL = `https://fakestoreapi.com/products/${id}`  
    const {data: product} = await useFetch(singleProductURL)
   

    usePath()

</script>

<style scoped>

    
    
</style>