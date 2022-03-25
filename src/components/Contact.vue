<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
 <h1 class="thatoblock">Contact us</h1>
 <div class="thatoblock">
<div class="container maincont">

    <div class="userInfo">

    <p>
      <strong>Fullname: </strong>
      Diego Allies
    </p>
    <p>
      <strong>Email: </strong>
      diegoallies27@gmail.com
    </p>
    <p>
      <strong>Number: </strong>
      0684005634
    </p>
    <p>
      <strong>Address: </strong>
      9 Hollywood Cresent, Westgate, Cape Town
    </p>


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
  margin-bottom: 19%;
}

h1 {
  font-size: 500%;
  padding: 1.9%;
}

p {
  font-size: 250%;
}
</style>