<template>
  <div id="app">

<!-- new nav -->

<!-- Simulate a smartphone / tablet -->
<div class="mobile-container">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="#home" class="active">Encryptogram</a>
  <div id="myLinks">

          <router-link @click="myFunction()" v-if="!currentUser" to="/register" class="nav-link nbtn background-for-text right-top-hover">
            <font-awesome-icon icon="user-plus" class="nbtn background-for-text ic" /> Sign Up
          </router-link>

          <router-link @click="myFunction()" v-if="!currentUser" to="/login" class="nav-link nbtn background-for-text right-top-hover">
            <font-awesome-icon icon="sign-in-alt" class="nbtn background-for-text ic" /> 
            Login
          </router-link>

    <router-link @click="myFunction()" v-if="currentUser" to="/home" class="nav-link nbtn background-for-text left-top-hover">
             <font-awesome-icon icon="home" class="nbtn background-for-text ic"/>
             Home
          </router-link>
    <router-link @click="myFunction()" v-if="currentUser" to="/user" class="nav-link nbtn background-for-text left-top-hover">Feed</router-link>

     <router-link @click="myFunction()" to="/contact" class="nav-link nbtn background-for-text right-top-hover">
           Contact
          </router-link>
     <router-link @click="myFunction()" to="/about" class="nav-link nbtn background-for-text right-top-hover">
      About
     </router-link>
     <a class="nav-link nbtn background-for-text right-top-hover" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" class="nbtn background-for-text ic"/> LogOut
          </a>
     
  </div>
  <a href="javascript:void(0);" class="icon" @click="myFunction()">
    <i class="fa fa-bars"></i> <i class="bi bi-list"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
  </a>
</div>

<!-- End smartphone / tablet look -->
</div>
<!-- end of new nav -->
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
          <router-link to="/register" class="nav-link nbtn background-for-text right-top-hover">
            <font-awesome-icon icon="user-plus" class="nbtn background-for-text" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link nbtn background-for-text right-top-hover">
            <font-awesome-icon icon="sign-in-alt" class="nbtn background-for-text" /> Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto push-right">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link background-for-text right-top-hover">
            <font-awesome-icon icon="user" class="background-for-text"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link nbtn background-for-text right-top-hover">
           Contact
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link nbtn background-for-text right-top-hover">
           About
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link nbtn background-for-text right-top-hover" @click.prevent="logOut">
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
.mobile-container {
  display: none;
}
@media screen and (max-width:700px) {
.navv {
  display: none;
}

.mobile-container {
  display: block;
}

.ic {
  display: none;
}
/* nav styling */

.topnav {
  overflow: hidden;
  position: fixed !important;
  z-index: 100;
  width: 100%;
  border-bottom: 0.5px solid aqua;
  background: rgb(35, 63, 63) !important;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: aqua;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
    border-left: 0.5px solid aqua;

}

.topnav a:hover {
  background-color: rgb(35, 63, 63);
  color: black;
}

.active {
  background-color: rgb(35, 63, 63);
  color: white;
}




}

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

.right-top-hover {
  border-right: rgb(35, 63, 63) solid 1px;
  border-top: rgb(35, 63, 63) solid 1px;
}

.right-top-hover:hover {
  border-right: aqua solid 1px;
  border-top: aqua solid 1px;
  color: aqua !important;
}

body{ margin:0;
font:normal 75% Arial, Helvetica, sans-serif;

} 

button {
  color: white;
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
    },
    myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
  }
  
};
</script>