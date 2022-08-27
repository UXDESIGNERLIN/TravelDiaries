<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>
<style lang="scss">

@import "./assets/scss/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 20px;
  padding: 0;
  text-align: center;
}
button {
  border: 1px solid $theme-color;
  border-radius: $border-radius;
  background-color: transparent;
  cursor: pointer;
}
input, textarea {
  border: 2px solid $theme-color;
  border-radius: 5px;
  line-height: 2rem;
  @include dark;
}
input::placeholder, textarea::placeholder {
  @include dark;
}
a {
  text-decoration: none;
  color: $theme-color;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.error-field {
  @include dark;
}
</style>
