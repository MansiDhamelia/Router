<template>
  <div id="app">
    <Tab />
    <Footer/>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Tab,
    Footer,
  },
};
</script>

<style>
p{
  font-size: 20px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
