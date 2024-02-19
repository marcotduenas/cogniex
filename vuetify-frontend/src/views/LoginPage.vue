<template>
    <v-row no-gutters align="center">
        <v-col cols="8">
            <div>
                <img width="600" :aspect-ratio="1" alt="Vue logo" src="@/assets/home2.svg" draggable="false"/>
            </div>
        </v-col>
        <v-col cols="4" class="">
            <div class=" mb-16">
                <span class="Titles mb-1">Bem vindo a</span>
                <br>
                <span class="cogniex"> Cogniex</span>
            </div>

            <div class="mb-4">
                <v-list-item>
                    <v-text-field clearable v-model="email" label="Email" prepend-icon="mdi-email" variant="outlined"/>
                </v-list-item>
                <v-list-item>
                    <v-text-field clearable v-model="password" label="Password" prepend-icon="mdi-lock" variant="outlined"/>
                </v-list-item>
            </div>
            <v-row no-gutters class="mb-9">
                <v-col align="center">
                    <v-btn variant="elevated" color="#b66b6b">Entrar</v-btn>
                </v-col>

            </v-row>

            <div class="text-subtitle-1">Doesn't have an account?</div>
            <router-link to="/register" class="text-decoration-none">
                <div class="text-subtitle-1">Register now!</div>
            </router-link>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'LoginPage',
    components: {},
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        async logginButton() {
            const credentials = { logEmail: this.email, logPassword: this.password }
            await this.$store.dispatch('login', credentials)
        }
    }
}
</script>

<style scoped>
.Titles {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    line-height: initial;
    background: #455a64;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.cogniex {
    font-family: "Rubik", sans-serif;
    font-size: 38px;
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
