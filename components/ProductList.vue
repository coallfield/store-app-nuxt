<template>
    <div class="products-container">
       <Product v-for="product in products" :product="product"></Product>
    </div>
</template>

<script setup>
    const props = defineProps({
        products: {
            type: Array,
            required: true
        }
    })

</script>

<style scoped>
.products-container {
    margin-top: 50px;
   grid-gap: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
   
}

</style>