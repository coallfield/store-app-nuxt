import { defineStore } from "pinia";


export const useProductStore = defineStore({
    id: 'productStore',
    state: () => {
        return {
            products:  [],
            url: 'https://fakestoreapi.com/products'
        }
    },
    actions: {
        setProducts(response) {
           this.products = response
        },
    }
})