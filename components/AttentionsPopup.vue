<template>
    <div class="attentions">
        <div class="data fail attention" v-if="attentionBlock.isDataEntered">ENTER DATA</div>
        <div class="wait attention" v-if="attentionBlock.isSendind"><strong>WAIT...</strong></div>
        <div class="fail attention" v-if="attentionBlock.isFail"><strong>SOMETHIG WENT WRONG</strong></div>
        <div class="success attention" v-if="attentionBlock.isSuccess"><strong>SUCCESS!</strong></div>
    </div>
</template>

<script setup>
const props = defineProps({
    attentionBlock: {
        type: Object,
        required: true
    }
})
</script>


<style scoped>
.attentions {
    position: absolute;
    bottom: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.fail {
    color: red;
}
.success {
    color: green;
}

</style>