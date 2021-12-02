<template>
  <div class="container">
    
    <div id="nav">
      
      <router-link to="Home" >Home</router-link>
      <router-link to="About">About US</router-link>
      <router-link to="Contact">Contact Us</router-link>
   
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  padding: 0px 10px;
  /* color: black; */
  text-decoration: none;
}
#nav {
  height: 50px;
  padding: 0px 20px;
  padding-top: 15px;
  color: black;
  /* background-color: blanchedalmond; */
  background-image: url("../assets/home.jpg");
  text-align: right;
  font-size: 25px;
  margin-bottom: 15px;
}

a:hover,
a:active {
  color:  #80552d;
}
</style>
