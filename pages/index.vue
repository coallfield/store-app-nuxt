<template>
    <div>
        <Sorts :products="products" />
        <div class="nothing">
            <h2 v-if="products.sortedByNameAndSelect.length === 0">NOTHING WAS FOUND</h2>
        </div>
        <ProductList :products="products.sortedByNameAndSelect" />
    </div>
</template>



<script setup>
    const products = useProductStore()
    const {data: response } = await useFetch(products.url)
    products.setProducts(response)
    usePath()
</script>

<style scoped>


.nothing {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}


</style>

