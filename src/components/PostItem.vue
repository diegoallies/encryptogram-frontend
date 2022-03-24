<template>
    <div class="bg-dark bloc aqua-border">
        <h2 class="hed bg-dark">{{ post.fullname }}</h2>
        <h5 class="txt bg-dark">{{ post.postText }}</h5>
        <br>

        <router-link :to="{name:'SinglePost', params: {id: post._id}}">
        <div class="p-image"><img :src="post.img" alt="Open image to alter content"/></div>
        </router-link>

          
    
       
    </div>

</template>

<script>
export default {

    props: ["post"],

    methods:{
    
    

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