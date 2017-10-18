<template>
    <v-container>


    </v-container>
</template>

<script>
    export default {

        created() {
             this.$dataStore.commit('secondmodule/updateBar', 1)
        },
        methods: {

        }
    };
</script>
