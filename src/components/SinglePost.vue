<template>
<div class="spaceTaker">
   <!-- consumes space --> 
 </div>
<div class="bg-dark bloc aqua-border">
 <h2 class="hed bg-dark">{{ post.fullname }}</h2>
        <h5 class="txt bg-dark">{{ post.postText }}</h5>
        <br>
        <div class="p-image"><img :src="post.img" /></div>
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
</style>