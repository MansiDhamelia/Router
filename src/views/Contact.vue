<template>
  <div class="bg-img">
    <div class="item1">
      <h1>Send A Message</h1>
      <div class="a">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div class="a">
        <input type="text" name="email" placeholder="Email" />
      </div>
      <div class="b">
        <input type="textarea" name="message" placeholder="Message" />
      </div>
      <div>
        <button class="btn">Send a message</button>
      </div>
    </div>

    <div class="item2">
      <h1>Get In Touch</h1>
      <div class="address">
        <h3>Location</h3>
        <p>123 heaven street Hamilton, ca 19222</p>

        <h3>Email</h3>
        <p>info@infotech.com</p>
      </div>
      <div class="hours">
        <h3>Open Hours</h3>
        Mon to Fri : 9am - 7am <br />
        Sat: closed <br />
        sun: closed
      </div>
    </div>
  </div>
</template>


<style scoped>
.bg-img {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 400px;
  padding: 0px 40px;
  background-color: #f2ebdf;
}
.item1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}
.item2 {
  align-items: flex-end;
  width: 30%;
}
input {
  background: transparent;
  border: none;
  height: 30px;
  width: 50%;
  border-radius: 4px;
  background-color: #faf8f5;
}
.btn {
  width: 20%;
  height: 30px;
  background-color: #ad825a;
  border: none;
  border-radius: 4px;
  color: wheat;
  font-size: 15px;
}

.b input {
  height: 100px;
}
</style>