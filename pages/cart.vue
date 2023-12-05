<template>
    <div class="cart-page">
        <div v-if="cartProducts.products.length === 0" class="nothing-conatainer">
            <h2>YOU DIDN'T CHOOSE ANYTHING</h2>
        </div>
        <ProductList :products="cartProducts.uniqProducts.sort((a, b) => a.id - b.id)"></ProductList>
        <div v-if="cartProducts.products.length > 0" class="btn-container">
            <MyButton @click="isPopup = true" class="purchase-button">PURCHASE</MyButton>
        </div>
        <PopupPurchase v-if="isPopup" @closePopup="closePopup()"></PopupPurchase>
    </div>

</template>

    

<script setup>
    usePath()
    const cartProducts = useCartProductStore()
    const isPopup = ref(false)
    function closePopup() {
        isPopup.value = false
    }
</script>


<style scoped>

.nothing-conatainer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.btn-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 40px;
}
.purchase-button {
    border-radius: 45px;
    
    background-color: brown;
    color: white;
    width: 500px;
    height: 50px;
    
}
</style>