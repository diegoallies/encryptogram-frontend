<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
<div class="bg-dark bloc aqua-border">

<div class="container-lg bhbh"> 
  <div class="row">
    <div class="col-9">
      <h2 class="hed bg-dark">{{ post.fullname }}</h2>
       <h5 class="txt bg-dark">{{ post.postText }}</h5>
    </div>
    <div class="col">
    <br>
        <button v-if="currentUser._id == post.created_by" @click="deletePost(post._id)" class="btn glow-on-hover">Delete Post</button>
         <br><button v-if="currentUser._id == post.created_by" type="button" class="btn glow-on-hover" data-toggle="modal" data-target="#exampleModalCenter">
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
      
        <button type="button" class="btn glow-on-hover btn-block" @click="editPost(post._id)">Save changes</button>
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
    margin-bottom: -1%;
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

</style>