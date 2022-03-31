<template>
  <v-card color="grey lighten-2">
    <v-img :src="dog.img" height="170px"> </v-img>
    <v-card-title>
      <div>
        <h3>{{ dog.name }}</h3>
        <p>{{ dog.breed }}</p>
        <v-btn
          @click="$emit('addFavorites', dog)"
           
          >Add To Favorites</v-btn
        >
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: {
      type: Object,
    },
  },
  computed: {
    favorites() {
      return this.$store.state.favorites
    },
  },
};
</script>