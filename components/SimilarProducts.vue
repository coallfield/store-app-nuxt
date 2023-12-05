<template>
    <div class="similar-products">
            <div>
                <h1 class="look-also">SEE ALSO</h1>
            </div>
            <Slider :similarProducts="similarProducts"></Slider>
            
    </div>
</template>


<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    })


    const similarProductsURL = `https://fakestoreapi.com/products/category/${props.product.category}`
    const {data: similarProducts} = await useFetch(similarProductsURL)
    similarProducts.value = similarProducts.value.filter(el => el.id != props.id)
    
    
    
   
</script>

<style scoped>
    .similar-products {
        margin-top: 30px;
        width: 100%;
    }
    .look-also {
        text-align: center;
        margin-bottom: 10px;
    }
    

</style>