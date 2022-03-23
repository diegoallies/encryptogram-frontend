<template>
    <div class="bg-dark bloc aqua-border">
        <h2 class="hed bg-dark">{{ post.fullname }}</h2>
        <h5 class="txt bg-dark">{{ post.postText }}</h5>
        <br>
        <div class="p-image"><img :src="post.img" /></div>
        
        <button @click="deletePost(post._id)">Delete Post</button>

        <router-link :to="{name:'SinglePost', params: {id: post._id}}">
                    VIEW POST
                </router-link>
       
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