<template>
  <div class="container">
    <div class="bg-img">

      <div class="text">
        <h1>Software Developer</h1>
        <p>
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
      <div class="item">
        <div>
          <h4>SWIFT</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <input type="button" class="btn" name="free" value="Price" />
      </div>

      <div class="item">
        <div>
          <h4>JAVA</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <input type="button" class="btn" name="free" value="Price" />
      </div>

      <div class="item">
        <div>
          <h4>PHP</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <input type="button" class="btn" name="free" value="Price" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.bg-img {
  height: 350px;
  padding: 0px 50px;
  text-align: left;
  background-image: linear-gradient(to right, #f2ebdf , white);
  position: relative;
  margin-top: 10px;
  /* background-image: url("../assets/home.jpg"); */
}
.item{
  background-color: #faf8f5;
  height: 200px;
  padding: 10px;
}
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
  padding: 15px;
  margin: 10px;
}
.text {
  position: absolute;
  width: 40%;
  margin-left: 50px;
}
.btn {
  background-color: #80552d;
  color: cornsilk;
  border: 80552d;
  height: 30px;
  width: 50px;
  border-radius: 4px;
}

</style>