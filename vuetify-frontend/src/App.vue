<template>
  <v-app>
    <v-row no-gutters>
      <v-app-bar :elevation="3">
        <nav>
          <router-link class="text-decoration-none" to="/">Home</router-link> |
          <router-link class="text-decoration-none" to="/about">About</router-link> |
          <router-link class="text-decoration-none" to="/login">Login</router-link> |
          <router-link class="text-decoration-none" to="/register">Register</router-link>
        </nav>
      </v-app-bar>
    </v-row>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  overflow-y: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>