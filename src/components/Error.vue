<template>
    <v-alert v-if="error.type!=null"
        :type="error.type"
    >{{error.mensaje}}</v-alert>
</template>
<script>
export default {
    computed: {
        error() {
            return this.$store.state.error
        }
    }
}
</script>