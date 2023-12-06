<template>
    <div class="sort-container">
            <div class="founder-products">
                <MyInput @input="products.setSortTitleValue($event.target.value)" :value="products.sortTitleValue"
                    placeholder="Type title" />
            </div>
            <SelectCategory :products="products" />
        </div>
</template>

<script setup>
    const props = defineProps({
        products: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>


.sort-container {
    grid-gap: 20px;
    margin-left: 50px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}


</style>