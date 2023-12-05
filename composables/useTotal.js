export const useTotal = () => {
    let total = 0
    const cartProducts = useCartProductStore()
    cartProducts.products.forEach(el => {
        total += el.price
    })
    return total
}