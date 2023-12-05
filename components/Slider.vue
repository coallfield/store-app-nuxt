<template>
    <div class="slider">
        <div :style="{ 'margin-right': + (2500 * currentSlideIndex) + 'px' }" class="similar-products-containers">
            <Product class="small" v-for="product in similarProducts" :product="product"></Product>


        </div>
        <div v-if="similarProducts.length > 3" class="slider-btns">
            <button @click.stop="slideLeft()" class="prev arrow"></button>
            <button @click.stop="slideRight()" class="next arrow"></button>
        </div>

    </div>
</template>

<script setup>
const currentSlideIndex = ref(0)
const props = defineProps({
    similarProducts: {
        type: Array,
        required: true
    }

})



function slideLeft() {
        if(currentSlideIndex.value > 0) {
                currentSlideIndex.value--
            }
            else {
                currentSlideIndex.value = Math.floor(((props.similarProducts.length -1 ) / 3))
            }
            
    }
    function slideRight() {
        if(currentSlideIndex.value >= Math.floor(((props.similarProducts.length - 1) / 3))) {
                currentSlideIndex.value = 0
            } else {
                currentSlideIndex.value++
            }
    }
</script>

<style scoped>
.similar-products-containers {
        transition: 0.5s ease;
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        grid-gap: 15px;
        width: 1200px;
        
    }
    .small {
        scale: 90%;
    }

    .slider {
     
        overflow: hidden;
        position: relative;
        width: 1300px;
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
.arrow {
   width: 48px;
   height: 48px;
   border-color: #000;
   position: absolute;
   top: 50%;
   margin-top: -31px;
   background: none;
   border: none;
}
.arrow:hover {
    border-color: brown;
}

.prev {
    border-bottom: 6px solid;
   border-left: 6px solid;
   transform: rotate(45deg);
   left: 40px;
}

.next {
    border-bottom: 6px solid;
   border-left: 6px solid;
   transform: rotate(-135deg);
   right: 10px;
}

</style>