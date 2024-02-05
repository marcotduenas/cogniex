<template>
    <v-app>
            <v-row no-gutters align="center" justify="center">
                <v-col cols="8">
                    <div>
                        <img width="300" height="300" :aspect-ratio="1" alt="Vue logo" src="../assets/logo.png" />
                    </div>
                </v-col>
                <v-col cols="4" class="">
                    <v-list-item>
                        <v-text-field clearable label="Email" prepend-icon="mdi-email"></v-text-field>
                    </v-list-item>
                    <v-list-item>
                        <v-text-field clearable label="Password" prepend-icon="mdi-lock"></v-text-field>
                    </v-list-item>
                </v-col>
            </v-row>
    </v-app>
</template>

<script>
export default {
    name: 'LoginPage',
    components: {},
    data: () => ({
    }),
}
</script>

<style scoped>
body,
html {
    overflow: hidden;
}
</style>
