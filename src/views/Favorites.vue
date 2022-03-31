<template>
    <div>
        <v-list>
            <v-subheader>
                My Favorites
            </v-subheader>
            <v-list-item v-for="(dog, index) in favorites" :key="index">
                <v-list-item-avatar>
                    <img :src="dog.img" >
                </v-list-item-avatar>
                <v-list-item-content>{{dog.name}}</v-list-item-content>
                <v-list-item-action><v-icon>delete</v-icon></v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>

export default {
    computed: {
        favorites() {
            return  this.$store.state.favorites
        }
    }
}
</script>