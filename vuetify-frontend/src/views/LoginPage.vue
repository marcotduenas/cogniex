<template>
    <v-app class="app">
        <v-row no-gutters align="center">
            <v-col m="0" cols="8">
                <div>
                    <img width="300" height="300" :aspect-ratio="1" alt="Vue logo" src="../assets/logo.png" />
                </div>
            </v-col>
            <v-col cols="4" class="mb-6" align-self="center">
                <v-list-item>
                    <v-text-field color="teal" type="email" label="Email" variant="solo-filled"></v-text-field>
                    
                </v-list-item>
                <v-list-item>
                    <v-icon icon="md:home"></v-icon>
                    <v-text-field color="teal" type="password" label="Password" variant="solo-filled"></v-text-field>
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
        icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    })
}
</script>

<style scoped>
body,
html {
    overflow: hidden;
}
</style>
