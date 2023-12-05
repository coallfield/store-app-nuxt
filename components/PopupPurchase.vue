<template>
    <div @click="emit('closePopup')" class="popup-container">
        <div @click.stop class="popup">
            <form @click.prevent>
                <h4>CONFIRM PURCHASE</h4>
                <input @input="postBody.name = $event.target.value" :value="postBody.name" type="text" placeholder="Enter your name" :class="{'input-attention': attentionsBlock.isDataEntered}">
                <input @input="postBody.email = $event.target.value" :value="postBody.email" type="email" placeholder="Enter your email" :class="{'input-attention': attentionsBlock.isDataEntered}" >
                <div>TOTAL: <strong>{{ Math.ceil(total) + '$'}}</strong> </div>
                <MyButton style="box-shadow: 5px 5px 5px black;" @click="sendCart(postBody)">CONFIRM</MyButton>
                <AttentionsPopup :attentionBlock="attentionsBlock"></AttentionsPopup>
            </form>
        </div>
    </div>
</template>

<script setup>
    const total = ref(useTotal())
    const attentionsBlock = ref({
        isDataEntered: false,
        isSendind: false,
        isFail: false,
        isSuccess: false
    })
    const emit = defineEmits(['closePopup'])

    
    const cartProducts = useCartProductStore()
    const postBody = {
        id: crypto.randomUUID(),
        name: '',
        email: '',
        products: cartProducts.products,
        total: total
    }
  
    
async function sendCart(postBody) {
    if(!postBody.name.trim() || !postBody.email.trim()) {
        attentionsBlock.value.isDataEntered = true
        setTimeout(() => {
            attentionsBlock.value.isDataEntered  = false
        }, 1000)
        return
    }   
    try {
        attentionsBlock.value.isSendind = true
        const response = await $fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            body: postBody
        })
        attentionsBlock.value.isSuccess = true
        setTimeout(() => {
            attentionsBlock.value.isSuccess = false
        }, 2000)
        cartProducts.products = []
        total.value = 0
    }
    catch {
        attentionsBlock.value.isFail = true
        setTimeout(() => {
            attentionsBlock.value.isFail = false
        }, 2000)
        throw new Error
    }
    finally {
        attentionsBlock.value.isSendind = false
        postBody.name = ''
        postBody.email = ''
        setTimeout(() => {
            emit('closePopup')
        }, 1000)
    }
    
}

    
   
</script>

<style scoped>
.popup-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.popup {
    background-color: white;
    width: 600px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: 3px solid brown;
    position: relative;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-gap: 20px;
    
}

input {
    padding-left: 10px;
    width: 300px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid black;
    border-radius: 25px;
    outline: none;
    box-shadow: 5px 5px 5px black;
}


.input-attention {
    border: 2px solid brown;
    box-shadow: 5px 5px 5px brown;
   
}
</style>