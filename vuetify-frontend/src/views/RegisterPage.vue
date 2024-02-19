<template>
    <v-row no-gutters align="center">
        <v-col cols="8">
            <div>
                <img width="500" :aspect-ratio="1" alt="Vue logo" src="@/assets/register.svg" />
            </div>
        </v-col>
        <v-col cols="4" class="">
            <v-row no-gutters>
                <v-col cols="6">
                    <v-list-item>
                        <v-text-field v-model="firstName" label="First Name" prepend-icon="mdi-account" variant="outlined"/>
                    </v-list-item>
                </v-col>
                <v-col cols="6">
                    <v-list-item>
                        <v-text-field v-model="lastName" label="Last Name" variant="outlined"/>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-list-item>
                <v-text-field clearable v-model="phone" label="Phone" prepend-icon="mdi-phone" variant="outlined"/>
            </v-list-item>
            <v-list-item>
                <v-text-field clearable v-model="email" label="Email" prepend-icon="mdi-email" variant="outlined"/>
            </v-list-item>
            <v-list-item>
                <v-text-field clearable v-model="password" label="Password" prepend-icon="mdi-lock" variant="outlined"/>
            </v-list-item>

            <v-row no-gutters>
                <v-col cols="6">
                    <router-link to="/login" class="text-decoration-none">
                        <v-btn variant="elevated" color="#455a64">Voltar</v-btn>
                    </router-link>
                </v-col>
                <v-col cols="6">
                    <v-btn variant="elevated" color="#b66b6b">Enviar</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'RegisterPage',
    components: {},
    data: () => ({
        email: '',
        password: '',
        phone: '',
        firstName: '',
        lastName: '',
    }),
    methods: {
        async registerButton() {
            const registerCredentials = { email: this.email, password: this.password, phone: this.phone, firstName: this.firstName, lastName: this.lastName }
            await this.$store.dispatch('register', registerCredentials)
        }
    }
}
</script>

<style scoped></style>
