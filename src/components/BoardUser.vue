<template>

<h1 class="feed">feed</h1>

<div class="body">

   
<div class="container">

  <div class="row">
      

    <div class="col-7">

     <div class="spaceTaker">
   <!-- consumes space --> 
 </div>

<div class="postBox">  
  <PostItem v-for="post of posts" :post="post" :key="post._id" />
</div>

<div class="eofLine">
  <h1 class="eof">End of feed</h1>
</div>

<div class="stk"></div>


    </div>

    <div class="col njnj">
      
  
  <form @submit.prevent="addPost" class="forme aqua-border background-for-text">
        <div class="greett background-for-text undl">
          <h1 class="background-for-text">Hello {{ currentUser.fullname }} 👋</h1>
        </div>
        
        <h2 class="cnp background-for-text">Create new post</h2>
        <div class="form-group haniah">
           <input name="postText" type="text" class="form-control" v-model="postText" placeholder="Whats on your mind"/>
        </div>

        <div class="form-group">
          <input name="img" type="text" class="form-control" v-model="img" placeholder="Paste image URL" />
        </div>
        <div class="form-group background-for-text">
          <button class="btn glow-on-hover btn-block" :disabled="loading" type="submit">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm bg-blue"
            ></span>
            <span class="bg-black">Submit</span>
          </button>
        </div>

  </form>
<!-- small bloxk at bottom right corner -->

       <div class="smallBlock aqua-border">
   <h1 class="eg"> EncryptoGram</h1>
        
       </div>
 
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


.feed {
  position: fixed;
}

.cnp {
  margin-top: 15%;
}

.forme {
  position: fixed;
  margin-top: 5.3%;
  margin-left: -2.5%;
  height: 60%;
  width: 37%;
  padding: 2%;
  background: rgb(35, 63, 63);
}

.feed {
  position: fixed;
  
}


.navv {
  visibility: hidden;
}

.spaceTaker {
  margin-top: 11%;
}

.bg-black {
  background: #111;
}

input {
  width: 100%;
}

.aqua-border {
  border: #00ffd5 0.5px solid;
  border-radius: 1.5%;
}

.smallBlock {
  margin-top: 37.8%;
  margin-left: -2.5%;
  height: 26%;
  width: 37%;
  z-index: 2;
  position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
   background: rgb(35, 63, 63) !important;
  
 
}

.eof {
  text-align: center;
}

.eofLine {
  border: #00ffd5 solid 0.5px;
  border-left: #00ffd5 solid 0.5px;
  border-right: #00ffd5 solid 0.5px;
  margin-top: 2%;
  margin-left: -2%;
  width: 100%;
  border-radius: 1.5%;
  height: 1%;
  padding: 3%;

}

.haniah {
  margin-top: 10%;
}

::placeholder {
  color: rgb(35, 63, 63);
}

input{
border-color: #00ffd5;
}

.stk {
  height: 0.15%;
}

.eg {
  margin-top: 11%;
  text-align: center;
  background: rgba(0, 0, 0, 0);
}

.postBox {
  width: 100%;
}

.greett {
  height: 15%;
}

@media screen and (max-width:700px) { 

p {
  font-size: 100%;
}
h1 {
  font-size: 300%;
  padding: 1.9%;
}

.njnj {
  visibility: hidden;
}

.bloc, .eofLine {
  width: 200%;
  margin-left: -8%;
  margin-top: 10%;
}

.spaceTaker {
  margin-top: 40%;
}



}
</style>

<script>
import PostItem from "./PostItem.vue"
export default {
  methods: {
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
        .then((json) => {console.log(json)
        fetch("https://encryptogram-backend.herokuapp.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data.reverse();
        console.log(data, this.posts);
      });
        });
    },
  },
  data() {
    return {
  posts: [],
  
  postText: "",
  img: "",
  
  

    };
  },
  mounted() {
    fetch("https://encryptogram-backend.herokuapp.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data.reverse();
        console.log(data, this.posts);
      });
   
  },

  components: { PostItem },

  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
    
  },
  
};
</script>



