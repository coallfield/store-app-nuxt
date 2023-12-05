<template>
    <nav class="navbar">
        <div class="app-title">
            <h1>STORE</h1>
        </div>
        <div>
            <ul>
                <li>
                    <NuxtLink  to="/">HOME</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart">CART</NuxtLink>
                    <CartCounter></CartCounter>
                </li>
                <li>
                    <NuxtLink to="/">Else</NuxtLink>
                </li>

            </ul>
        </div>

    </nav>
</template>


<style scoped>


h1 {
    font-size: 2.5rem;
}

.navbar {
    padding: 25px;
    box-shadow: 1px 1px 10px black;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    grid-gap: 15px
}

li {
    position: relative;
   
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
    color: brown;
}
</style>