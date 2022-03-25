<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
 <h1 class="thatoblock">  Profile </h1>
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
      <button @click="editUser(currentUser._id)" class="glow-on-hover btn-block btnn lhb" data-toggle="modal" data-target="#exampleModal">Edit Account Details</button>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <input type="text" id="inputt" :placeholder="currentUser.fullname" class="btn-block" v-model="fullname"> 
       <input type="text" id="inputt" :placeholder="currentUser.email" class="btn-block" v-model="email"> 
       <input type="text" id="inputt" :placeholder="currentUser.number" class="btn-block" v-model="number"> 

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="editUser(currentUser._id)">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
    editUser(id){
    fetch("https://encryptogram-backend.herokuapp.com/users/" + id, {
        method: "PATCH",
        body: JSON.stringify({

        fullname: this.fullname,
        email: this.email,
        number: this.phone_number,
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
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

    fetch("https://encryptogram-backend.herokuapp.com/users/")
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
        console.log(data, this.users);
      });
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
  margin-bottom: 2%;
}

h1 {
  font-size: 500%;
  padding: 1.9%;
}

p {
  font-size: 200%;
}
</style>