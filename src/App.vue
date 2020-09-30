<template>
 <div>{{user.userName}}-{{fullName}}</div>
 <div><strong>Followers:</strong>{{followers}}</div>
 <div><button @click="followUser">Follow</button></div>
</template>

<script>


export default {
  name: 'App',
  
  data() {
      return {
        followers: 0,
        user: {
          id: 1,
          firstName: 'Fname',
          lastName: 'Lname',
          email: 'fname@email.com',
          userName: '_fname.lname',
          isAdmin: true
        }
      }
  },
   computed: {
     fullName() {
       return `${this.user.firstName} ${this.user.lastName}`;
     }
   },
   methods: {
     followUser() {
       this.followers++;
     }
   },
   mounted() {
     this.followUser();
   },
   watch: {
     followers(newFollowerCount, oldFollowerCount) {
       if(oldFollowerCount < newFollowerCount) {
         console.log(`${this.user.userName} has gained a follower!`);
      }
     }
   }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
