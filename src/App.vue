<template>
  <div id="app">

    <div class="navv">
  <nav class="navbar navbar-expand naav coll">

        <div class="navbar-nav push-left">
        <li class="nav-item">
          <router-link v-if="currentUser" to="/home" class="nav-link nbtn">
            <font-awesome-icon icon="home" class="nbtn"/> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link nbtn">Feed</router-link>
        </li>
      </div>
   
    
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link nbtn">
            <font-awesome-icon icon="user-plus" class="nbtn" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link nbtn">
            <font-awesome-icon icon="sign-in-alt" class="nbtn" /> Login
          </router-link>
        </li>
      </div>
      <div v-if="currentUser" class="navbar-nav ml-auto push-right">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" class="bg-dark"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link nbtn" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" class="nbtn"/> LogOut
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