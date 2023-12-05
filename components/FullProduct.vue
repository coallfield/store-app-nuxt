<template>
    <div class="product-info">
            <div class="image-container">
                <img :src="product.image">
            </div>
            <div class="text-info">
                <div class="title">
                    <h1>{{ product.title }}</h1>
                </div>
                <div class="description">
                    <p>{{ product.description }}</p>
                </div>
                <div class="rate">
                    <div class="rating">
                        <h3>RATE: {{ product.rating.rate }}</h3>
                    </div>
                </div>
                <div class="price">
                    <h3>PRICE: <strong>{{ product.price + "$" }}</strong></h3>
                </div>
                <div class="btns">
                    <MyButton><NuxtLink to="/">BACK</NuxtLink></MyButton>
                    <MyButton @click="cartProducts.addProduct(product)">BUY</MyButton>
                </div>
            </div>
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
.product-info {
    margin-top: 125px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
}
.text-info {
    margin-left: 25px;
}
    .image-container {
        width: 400px;
        height: 300px;
        
    }
    .description {
        margin-top: 20px;
        width: 400px;
        
    }
    img {
        width: 100%;;
        height: 300px;
        object-fit: contain;
    }

    .rate {
        display: flex;
        flex-direction: row;
        grid-gap: 15px;
        margin-top: 10px;
    }
    .price {
        color: brown;
        margin-top: 10px;
    }
    .btns {
        display: flex;
        grid-gap: 10px;
        margin-top: 10px;
    }
    
</style>