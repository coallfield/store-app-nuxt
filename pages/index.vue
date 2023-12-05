<template>
    <div>
        <ProductList :products="products.products"></ProductList>
    </div>
</template>



<script setup>
    const products = useProductStore()
    const {data: response } = await useFetch(products.url)
    products.setProducts(response)
    usePath()
</script>

