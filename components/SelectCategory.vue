<template>
    <div class="sort-category">
        <select @change="products.setSortSelect($event.target.value)">
            <option selected value="all">ALL</option>
            <option value="women's clothing">WOMEN'S CLOTHING</option>
            <option value="jewelery">JEWELERY</option>
            <option value="men's clothing">MEN'S CLOTHING</option>
            <option value="electronics">ELECTRONICS</option>
        </select>
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
select {
    width: 300px;
    height: 50px;
    outline: none;
}
option {
    text-align: center;
}

</style>