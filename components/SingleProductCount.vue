<template>
    <div class="product-count">
        <MyButton @click="cartProducts.addProduct(product)">+</MyButton>
        <div><strong>{{ cartProducts.products.filter(el => el.id == product.id).length }}</strong></div>
        <MyButton @click="cartProducts.deleteProduct(product)">-</MyButton>
    </div>
</template>

<script setup>
const props = defineProps({
    cartProducts: {
        type: Object,
        required: true
    },
    product: {
        type: Object,
        required: true
    }
        
})

</script>

<style scoped>
.product-count {
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-gap: 30px
}
.product-count button {
    width: 60px;
    height: 20px;
}

</style>