<template>
  <Description />
  <Search />
  <MovieList />
</template>

<script>
import Description from "../components/Description.vue";
import Search from "../components/Search.vue";
import MovieList from "../components/MovieList.vue";

export default {
  components: {
    Description,
    Search,
    MovieList,
  },
};
</script>
