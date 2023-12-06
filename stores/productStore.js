import { defineStore } from "pinia";


export const useProductStore = defineStore({
    id: 'productStore',
    state: () => {
        return {
            products:  [],
            url: 'https://fakestoreapi.com/products',
            sortTitleValue: '',
            sortSelect: 'all'
        }
    },
    actions: {
        setProducts(response) {
           this.products = response
        },
        setSortTitleValue(event)  {
            this.sortTitleValue = event
        },
        setSortSelect(event) {
            this.sortSelect = event
        }
    },
    getters: {
        sortedByName() {
            return this.products.filter(el => el.title.toLowerCase().trim().includes(this.sortTitleValue.toLowerCase().trim()))
        },
        sortedByNameAndSelect() {
            if(this.sortSelect === 'all')
            return this.sortedByName
            return this.sortedByName.filter(el => el.category === this.sortSelect)
        }
    }
})