<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<style scoped>
.btn {
    background: none;
    border: 1px solid black;
    width: 130px;
    height: 30px;
    
}

.btn:hover {
    border: 1px solid brown;
}
.btn:active {
    background-color: brown;
    color: white;
    
}


</style>