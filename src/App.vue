<template>
  <div id="app">
    <header>
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="{ name: 'counter' }">Playing</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'chat' }">Room Chat</router-link>
        </li>
      </ul>
    </header>
    <div class="container">
      <img
        src="./assets/happy-cute-kid-boy-girl-play-tug-o-war_97632-1415.jpg"
        class="logo"
      />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Tarik Tambang App",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header li {
  list-style: none;
  margin-top: 15px;
  float: left;
  margin-right: 25px;
}

header a {
  color: white;
}

header a:hover {
  color: #fff !important;
}

.logo {
  margin: 0 auto;
  display: table;
}
</style>
