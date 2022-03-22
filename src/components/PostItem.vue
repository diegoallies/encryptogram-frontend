<template>
    <div class="bg-dark bloc aqua-border">
        <h2 class="hed bg-dark">{{ post.fullname }}</h2>
        <h5 class="txt bg-dark">{{ post.postText }}</h5>
        <br>
        <div class="p-image"><img :src="post.img" /></div>
        <button @click="deletePost(post._id)">Delete Post</button>
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" >
            Edit
        </button> -->
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" :data-target="post._id">Edit</b-button>
    </div>

    <!-- Modal -->
<div class="modal fade" :id="post._id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="postText">Whats on your mind:</label>
        <input name="postText" type="text" class="form-control" v-model="postText" />
      </div>
      <div class="modal-footer">
        
         <button class="btn glow-on-hover btn-block" :disabled="loading" type="submit">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm bg-blue"
            ></span>
            <span class="bg-black" @click="editPost(post._id)">Save</span>
          </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

    props: ["post"],

    methods:{
    addPost(){
    fetch("https://encryptogram-backend.herokuapp.com/posts/", {
        method: "POST",
        body: JSON.stringify({

        img: this.img,
        postText: this.postText,
        fullname: this.currentUser.fullname,
        
        atn: this.currentUser.accessToken
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },

    deletePost(id){
    fetch("https://encryptogram-backend.herokuapp.com/posts/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
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
        .then((json) => console.log(json));
    },
    

  }
  ,
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
    
  },

}
</script>

<style>
.p-image {
  object-fit: contain;
  overflow: hidden;

}

.p-image img {
  width: 100%;
}

.hed, .txt {
  margin-left: 2%;
  margin-top: -1%;
  border-radius: 10%;
}

.txt {
    margin-bottom: -1%;
}

.aqua-border {
  border: #00ffd5 0.5px solid;
  border-radius: 1.5%;
}

.bloc {
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 1.5%;
  color: aqua;
  margin-top: 2%;
  margin-left: -2%;

}
</style>