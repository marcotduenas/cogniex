<template>
  <v-app>
    <v-row v-if="this.$route.path === '/register' || this.$route.path === '/login'" no-gutters />
    <v-row v-else no-gutters>
      <v-app-bar :elevation="3">
        <v-container>
          <nav>
            <router-link class="text-decoration-none" to="/">Home</router-link> |
            <router-link class="text-decoration-none" to="/about">About</router-link> |
            <router-link class="text-decoration-none" to="/login">Login</router-link> |
            <router-link class="text-decoration-none" to="/register">Register</router-link>
          </nav>
        </v-container>
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
  color: #b66b6b;
}

.cogniex {
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: initial;
  background: #b66b6b;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>