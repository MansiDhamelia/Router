<template>
  <div>
    <div class="main_footer">
      <div class="ft1">
        <h1 class="logo">Logo</h1>
      </div>
 
      <div class="ft2">
        <ul>
          <h3>Features</h3>
          <li>Cool stuff</li>
          <li>Random feature</li>
          <li>Team feature</li>
          <li>Stuff for developers</li>
          <li>Another one</li>
          <li>Last time</li>
        </ul>
      </div>
      <div class="ft3">
        <ul>
          <h3>Resources</h3>
          <li>Resource</li>
          <li>Resource name</li>
          <li>Another resource</li>
          <li>Final resource</li>
        </ul>
      </div>
      <div class="ft4">
        <ul>
          <h3>About</h3>
          <li>Team</li>
          <li>Location</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
   
  </div>
</template>


<style scoped>

.main_footer {
  display: flex;
  scroll-padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #ad825a;
  height: 300px;
  padding: 20px;
  margin-top: 20px;
}
/* .ft1{
  height: 50px;
  width: 50px;
  background-image: url("../assets/cloud.jpeg");
  border-radius: 50%;

} */
h4{
  font-size: 20px;
}
ul li {
  font-size: 20px;
}
</style>