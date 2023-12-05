export const usePath = () => {
    const router = useRoute()
    const cartProducts = useCartProductStore()
    cartProducts.changeProductPage(router.path)
}