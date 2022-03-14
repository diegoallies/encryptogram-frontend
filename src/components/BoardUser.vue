<template>

<h1 class="feed">feed</h1>

<div class="body">


 

  <h1 class="forme">fixed</h1>
  
   
<div class="container">

  <div class="row">
    <div class="col-7">

<div v-for="post in posts" :key="post">
      <div class="bg-dark bloc">
      <h2 class="hed bg-dark">{{ post.fullname }}</h2>
      <h5 class="txt bg-dark">{{ post.postText }}</h5>
      <br>
      <div class="p-image"><img :src="post.img" /></div>
    </div>
</div>

    </div>

    <div class="col">
      
  
  <form @submit.prevent="addPost" class="forme">


        <h1 class="cnp">Create new post</h1>
        <div class="form-group">
          <label for="postText">Whats on your mind:</label>
          <input name="postText" type="text" class="form-control" v-model="postText" />
        </div>

        <div class="form-group">
          <label for="img">Image URL:</label>
          <input name="img" type="text" class="form-control" v-model="img" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading" type="submit">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Submit</span>
          </button>
        </div>

  </form>



    </div>
  
  </div>
</div>
  








</div>




 
</template>

<style scoped>

.body{
  background-color: rgb(157, 204, 247);
}

.fn{
  visibility: hidden;
  margin-bottom: -20%;

}
.bloc {
  width: 100%;
  border: 1px solid rgb(18, 255, 223);
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 1.5%;
  color: aqua;
  margin-top: 2%;
  margin-left: -2%;

}

.feed {
  position: fixed;
}

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
}

.txt {
    margin-bottom: -1%;
}

.cnp {
  margin-top: 15%;
}

.forme {
  position: fixed;
}

.feed {
  position: fixed;
}

.navv {
  visibility: hidden;
}




</style>

<script>
export default {
  data() {
    return {
  posts: [],
  
  postText: "",
  img: "",
  
  

    };
  },
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
    }

  }
  ,
  mounted() {
    fetch("https://encryptogram-backend.herokuapp.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data;
        console.log(data, this.posts);
      });
  },

  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
    
  },

};
</script>



