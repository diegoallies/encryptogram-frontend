<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
 <h1 class="thatoblock">Profile</h1>
 <div class="thatoblock">
<div class="container maincont">

    <div class="userInfo">
      <p>
      <strong>Fullname: </strong>
      {{currentUser.fullname}}
    </p>
    <p>
      <strong>Email: </strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Number: </strong>
      {{currentUser.number}}
    </p>
    <p>
      <strong>User Id: </strong>
      <span class="lmt">{{currentUser._id}}</span>
    </p>
      <button @click="deleteUser(currentUser._id)" class="glow-on-hover btn-block btnn thb">Delete Account</button>
  <button @click="deleteUser(currentUser._id)" class="glow-on-hover btn-block btnn lhb">Edit Account Details</button>
    </div>
    
  </div>

 </div>
  


</template>

<script>
export default {
  methods: {
     deleteUser(id){
    fetch("https://encryptogram-backend.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        location.reload()});
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
    },
  },
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.spaceTaker {
  height: 65px;
}

.thatoblock {
  border: aqua solid 1px;
  border-radius: 1%;
  
}

.userInfo {
  margin-top: 5%;
  contain: initial;
}

.maincont {
  width: 70%;
  margin-left: 1%;
}

.lmt {
  width: 10%;
}

.btnn {
  width: 60%;
  margin-top: 2%;
}

.thb {
   margin-top: 5%;
}

.lhb {
  margin-bottom: 5%;
}

h1 {
  font-size: 500%;
}

p {
  font-size: 200%;
}
</style>