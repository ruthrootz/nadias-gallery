<template>
    <div id="app">
        <div id="nav" class="shadow">
            <b-navbar type="light" variant="light" fixed="top">
                <b-navbar-brand href="#">
                    <router-link to="/">Nadia's Gallery</router-link>
                </b-navbar-brand>
                <b-navbar-nav class="m-1">
                    <b-nav-item class="link">Etsy</b-nav-item>
                    <b-nav-item class="link">Upwork</b-nav-item>
                    <b-nav-item class="link">Instagram</b-nav-item>
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
    background-color: #F2E9E4;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#nav a {
    font-weight: bold;
    font-size: 3rem;
    color: #732735;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #732735;
    margin: 10%;
}

#nav .navbar {
    background-color: #F2E9E4 !important;
}

#nav .nav-link {
    font-weight: normal;
    font-size: 2rem;
}

.link:first-child {
    margin-left: 10%;
}

.link {
    margin-left: 5%;
}

</style>

