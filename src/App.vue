<template>
    <div id="app">
        <div id="nav" class="shadow">
            <b-navbar type="light" variant="light" sticky="true">
                <b-navbar-brand href="#">
                    <router-link to="/">Nadia's Gallery</router-link>
                </b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item></b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <router-view/>
    </div>
</template>

<style>

#app {
    font-family: 'Lobster', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #D9CBBF;
}

#nav {
    padding: 30px;
    background-color: #F2E3D5;
}

#nav a {
    font-weight: bold;
    color: #261C10;
}

#nav a.router-link-exact-active {
    color: #261C10;
}

#nav .navbar {
    background-color: #F2E3D5 !important;
}

</style>

