<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
<div class="bg-dark bloc aqua-border kkk">

<div class="container-lg bhbh kkk"> 
  <div class="row kkk">
    <div class="col-9 kkk">
      <h2 class="hed kkk">{{ post.fullname }}</h2>
       <h5 class="txt kkk">{{ post.postText }}</h5>
    </div>
    <div class="col kkk">
    <br>
        <router-link class="delet" to="/user">
         <button v-if="currentUser._id == post.created_by" @click="deletePost(post._id)" class="btn glow-on-hover buttton kkm">
            Delete Post
          </button>
        </router-link>

         <br>
         <button v-if="currentUser._id == post.created_by" type="button" class="btn glow-on-hover buttton" data-toggle="modal" data-target="#exampleModalCenter">
         Edit Post
        </button>
    </div>
  </div>
</div>
 
       
        
       
        <div class="p-image"><img :src="post.img" /> </div>
   

   <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="bg-dark bloc aqua-border">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> Edit Post </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <input type="text" id="inputt" :placeholder="post.postText" class="btn-block" v-model="postText"> 
      </div>
      <div class="modal-footer">
      
        <button type="button" class="btn glow-on-hover btn-block butn kkkl" @click="editPost(post._id)">Save changes</button>
      </div>
    </div>
    </div>
  </div>
</div>
        </div>
     
   
</template>

<script>


export default {
data(){
    return{
        id: this.$route.params.id,
        post: {},
    }
},
mounted() {
    fetch("https://encryptogram-backend.herokuapp.com/posts/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.post = data;
        console.log(this.post);
      });
},

computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
    
  },

  methods: {
    deletePost(id){
    fetch("https://encryptogram-backend.herokuapp.com/posts/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        location.reload()});
    },

    editPost(id){
    fetch("https://encryptogram-backend.herokuapp.com/posts/" + id, {
        method: "PATCH",
        body: JSON.stringify({

        postText: this.postText,
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        location.reload()});
    },
  },
}


</script>

<style scoped>
.spaceTaker {
  height: 60px;
}

.p-image {
  object-fit: contain;
  overflow: hidden;

}

.p-image img {
  width: 100%;
  height: 100%;
}

.hed, .txt {
  margin-left: 2%;
  margin-top: -1%;
  border-radius: 10%;
}

.txt {
  font-size: 200%;
  margin-bottom: 0% !important;
}

.hed {
  font-size: 300%;
  margin-bottom: 3%;
}

.bloc {
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 1.5%;
  color: aqua;
  margin-top: 2%;
  margin-left: -2%;
  margin-bottom: 5%;

}

.aqua-border {
  border: #00ffd5 0.5px solid;
  border-radius: 1.5%;
}

#inputt {
  border: #00ffd5 1px solid;
  border-radius: 0.5%;
}

.bhbh {
  background: #343a40 !important;
}

.kkk {
  background-color: rgb(35, 63, 63) !important;
}

.kkm {
  margin-bottom: 13% !important;
}

.buttton {
  margin-top: -10%;
  margin-bottom: 5%;
  color: white;
}

.butn {
  color: white;
}

#inputt::placeholder {
  color: white;
}

.delet {
  color: white;
}

.delet:hover {
  border: none;
  color: blue;
}

@media screen and (max-width:700px) { 

.hed {
  font-size: 180%;
  margin-top: 0%;
}

.txt {
  font-size: 120%;
}
.bloc {
  margin-left: -0.3%;
  margin-top: 5%;
}

button {
  width: 100%;
  height: 30%;

}

.kkm {
  margin-top: 1%;
  margin-bottom: 10%;

}

img {
  margin-top: 0%;
}
}

</style>