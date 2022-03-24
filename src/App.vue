<template>
  <div id="app">

    <div class="navv">
  <nav class="navbar navbar-expand naav coll">

      <div class="navbar-nav push-left">
        <li class="nav-item">
          <router-link v-if="currentUser" to="/home" class="nav-link nbtn background-for-text left-top-hover">
            <font-awesome-icon icon="home" class="nbtn background-for-text"/> Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link nbtn background-for-text left-top-hover">Feed</router-link>
        </li>
      </div>
   
    
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link nbtn background-for-text left-top-hover">
            <font-awesome-icon icon="user-plus" class="nbtn background-for-text" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link nbtn background-for-text left-top-hover">
            <font-awesome-icon icon="sign-in-alt" class="nbtn background-for-text" /> Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto push-right">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link background-for-text left-top-hover">
            <font-awesome-icon icon="user" class="background-for-text"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link nbtn background-for-text left-top-hover" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" class="nbtn background-for-text"/> LogOut
          </a>
        </li>
      </div>

    </nav>

    </div>
  

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>


*{
  background-color: #343a40;
  color: rgb(255, 255, 255);

}

.background-for-text {
   background: rgb(35, 63, 63) !important;
}

.ccenter {
  margin-left: 29%;
}

.push-left {
  margin-left: 5.5%;
}

.push-right {
  margin-right: 5.5%
}

.naav {
  position: fixed !important;
  z-index: 100;
  width: 100%;
  border-bottom: 0.5px solid aqua;
  background: rgb(35, 63, 63) !important;
}

.coll {
  color: aliceblue !important;
}

.nbtn {
  color: white !important;
}

.left-top-hover:hover {
  border-left: aqua solid 1px;
  border-bottom: aqua solid 1px;
  color: aqua !important;
}

.left-top-hover {
  border-left: rgb(35, 63, 63) solid 1px;
  border-bottom: rgb(35, 63, 63) solid 1px;
}
 

body{ margin:0;
font:normal 75% Arial, Helvetica, sans-serif;

} 

#particles-js{ position:absolute;
z-index: -1000;
width: 110%;
margin-left: -10%;
height: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
}


/* code for button */


.glow-on-hover {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #8400ff, #4efcf3, #6d1fff, #1100f8, #00ffd5, #002bff, #7a00ff, #1bf75d, #2e0564);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: rgb(0, 0, 0)
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
</style>


<script>
export default {
   
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    
    
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
  
};
</script>