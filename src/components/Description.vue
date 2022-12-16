<template>
  <div class="container">
    <h1>
      <span>Discover great moive with <span class="point">FINDYM</span></span>
    </h1>
  </div>
</template>

<style style="scss" scoped>
@import "~/scss/main.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

h1 {
  line-height: 1;
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  span {
    color: $danger;
  }
}
</style>
