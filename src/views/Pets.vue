<template>
    <v-container fluid grid-list-md>
        <v-layout wrap>
            <v-flex xs12 sm4 md3 v-for="pet in dogs" :key="pet.breed">
                <app-dog :dog="pet" @addFavorites="preAddFavorites"></app-dog>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Pet from "../components/Pet"
import Dogs  from  "../data/dogs"
import { mapActions } from 'vuex' 

export default {
    components: {
        appDog: Pet
    },
    data: () => ({
        dogs: Dogs
    }),
    methods: {
        preAddFavorites(dog) {
            if (!this.$store.state.favorites.includes(dog))
                this.$store.dispatch("addToFavorites", dog)
            else {
                let message  = {
                    type: "error",
                    mensaje: "La mascota ya está en tus favoritos"
                }
                this.$store.dispatch("changeError", message)
            }
        },

        ...mapActions(["addToFavorites", "changeError"])
    },

}
</script>