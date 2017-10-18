<template>
    <v-app id="example-1">
        <router-link :to="{ name: 'secondpage'}">Link</router-link>
        {{data.connected}}
        {{this.$dataStore.state.foo}}
        <main>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
        </main>
        <v-snackbar success top :timeout="2000" v-model="data.connected">
            connection established!
        </v-snackbar>
    </v-app>
</template>

<script type="text/babel">
    export default {
        computed:{
            data() {
                return {
                    connected: this.$dataStore.state.foo,
                    bar: this.$dataStore.state.secondmodule.bar
                }
            }
        },
    };
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';
    @import 'css/main.css';
</style>
