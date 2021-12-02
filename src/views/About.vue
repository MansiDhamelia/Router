<template>
  <div class="container">
    <div class="bg-img">
      <div class="item">
        <h1>About Us</h1>
        <p class="subText">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="box">
      <h2>Our Team</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="team">
        <div class="item1">
          <div class="dp"></div>
          <h3>Jhon</h3>
          <p class="dp_position">Head</p>
        </div>

        <div class="item1">
          <div class="dp"></div>
          <h3>Micle</h3>
          <p class="dp_position">co-founder</p>
        </div>

        <div class="item1">
          <div class="dp"></div>
          <h3>Sam</h3>
          <p class="dp_position">co-founder</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  position: relative;
  height: 450px;
  text-align: left;
  margin: 10px;
  background-image: linear-gradient(to right, #f2ebdf, white);
  background-size: cover;
  background-attachment: fixed;

  /* background-image: url("../assets/about1.jpg"); */
}
h1 {
  font-size: 50px;
}
.item {
  /* width: 40%; */
  position: absolute;
  padding-left: 15%;
  padding-top: 3%;
}
.subText {
  padding-left: 30px;
  font-size: 20px;
  font-weight: bold;
}
.text {
  padding-left: 30px;
  padding-right: 15px;
}
.box {
  background-color: #faf8f5;
  height: 330px;
  width: 86%;
  margin: 0px 7%;
  text-align: center;
  /* position: relative; */
  padding: 5px;
}
.team {
  width: 80%;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10px;
}
.dp {
  height: 100px;
  width: 100px;
  background-image: url("../assets/cloud.jpeg");
  border-radius: 50%;
}
.dp_position {
  color: darkgray;
}
</style>