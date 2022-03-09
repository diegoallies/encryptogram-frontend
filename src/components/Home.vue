<template>
  <div class="section-heading space">
    <h1>Products</h1>


 <div v-for="post in posts" :key="post" class="col-md-6">
                <h5>{{ post.postText }}</h5>
              </div>
             

  </div>

       
 
 
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("https://encryptogram-backend.herokuapp.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data;
        console.log(data, this.posts);
      });
  },

};
</script>