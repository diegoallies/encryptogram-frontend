<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
 <h1 class="thatoblock">About us</h1>
 <div class="thatoblock">
<div class="container maincont">

    <div class="userInfo">

     <p>
         
        Encryptogram is a fast growing social media platform , made for developers to intereract with. Our main goal is to build a fully secure social media platform where developers can share code and help with casual error codes. A texting system is still underway . Stay tuned !
            <br> <br>
        EncryptoGram is designed, written, implimented and managed by Diego Allies.

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
  margin-bottom: 9%;
}

h1 {
  font-size: 500%;
  padding: 1.9%;
}

p {
  font-size: 190%;
}

@media screen and (max-width:700px) { 

p {
  font-size: 100%;
}
h1 {
  font-size: 300%;
  padding: 1.9%;
}


}
</style>