<template>
    <div class="product-card">
            <div class="product-image">
                <img :src="product.image">
            </div>
            <div class="product-info">
                <div class="product-name">
                    <h4>{{ product.title.length > 40 ? (product.title.split('').splice(null, 40).join('') + '...') : product.title }}</h4>
                </div>
            </div>
            <div class="price-count">
                    <div>PRICE: <strong>{{ product.price  + '$'}}</strong></div>              
            </div>
            <div class="buttons">
                <MyButton class="btn"><NuxtLink :to="`/${product.id}`">ABOUT</NuxtLink></MyButton>
                <MyButton @click="cartProducts.addProduct(product)" v-if="!cartProducts.isProductPage" class="btn">BUY</MyButton>
            </div>
            <SingleProductCount v-if="cartProducts.isProductPage" :cartProducts="cartProducts" :product="product"></SingleProductCount>
        </div>
</template>

<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    })
   
    const cartProducts = useCartProductStore()
    
   
    
    
  
</script>

<style scoped>
.product-card {
    width: 400px;
    height: 500px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    grid-gap: 20px;
    border-radius: 5px;
  
    flex-direction: column;
}
.product-card:hover {
    border: 2px solid brown;
    
}

.product-image {
  
    margin-top: 15px;
    width: 400px;
    height: 250px;
    display: flex;
   justify-content: center;
    
}


img {
   
    object-fit: contain;
    width: 50%;
    height: 250px;
    
}


.product-info {
    display: flex;
    justify-content:center;
    
}

.price-count {
    display: flex;
    justify-content: center;
    grid-gap: 10px;
}
.buttons {
    display: flex;
    justify-content: center;
    grid-gap: 10px
}
.btn {
    background: none;
    border: 1px solid black;
    width: 130px;
    height: 30px;
}
.btn:hover {
    border: 1px solid brown;
}
a {
    text-decoration: none;
    color: black;
}


</style>