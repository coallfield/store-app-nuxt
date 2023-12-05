import {defineStore} from 'pinia'


export const useCartProductStore = defineStore({
    id: 'cartProductStore',
    state: () => {
        return {
            products: [],
            isProductPage: false,  
        }
    },
    actions: {
        addProduct(product) {
            this.products.push(product)     
        },
        deleteProduct(product) {
            const index = this.products.indexOf(product)
            this.products.splice(index, 1)
        },
        changeProductPage(path) {
            path === '/cart' ? this.isProductPage = true : this.isProductPage = false
        }

    },
    getters: {
        uniqProducts(state) {
             const newArray = state.products.reduce((array, currentObject) => {
                if(!array.find(el => el.id == currentObject.id)) {
                    array.push(currentObject)
                }
                return array
            }, [])
            return newArray
    }}
})