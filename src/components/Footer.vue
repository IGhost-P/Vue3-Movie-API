<template>
  <footer class="container">
    <p>© {{ year }} sang woo Yang</p>
  </footer>
</template>

<script>
export default {
  year: new Date().getFullYear(),
};
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
footer {
  padding: 70px 0;
  text-align: center;
  color: $danger;
}
</style>
