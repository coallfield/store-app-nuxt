<template>
    <div v-if="cartProducts.products.length > 0" class="product-count-circle">
        <div class="product-count">{{ cartProducts.products.length }}</div>
    </div>
</template>

<script setup>
    const cartProducts = useCartProductStore()
</script>


<style scoped>
.product-count-circle {
    width: 25px;
    height: 25px;
    background-color: brown;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 30px;
    
}

.product-count {
    color: white;
}
</style>