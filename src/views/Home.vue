<template>
  <h2 class="home">
    Welcome to the Twoot Guys!!!
  </h2>
  <div class="content">
    <ul>
      <li v-for="(user, index) in state.users" :key="user.id">
        <router-link :to="{name: 'UserProfile', params: {userId: index} }">@{{user.username}}</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive} from 'vue';
import {users} from './../assets/Users';
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      users: users
    });

    return {
      state
    };
  }
}
</script>

<style>
.home {
  text-align: center;
}
.content {
  padding: 20px 40px;
}

ul li {
  list-style: none;
  width: 400px;
  margin: 20px;
  padding: 30px;
  border: 1px solid #cccccc;
  font-size: 20px;
  color: cornflowerblue;
}
ul li a {
  color:inherit;
  text-decoration: none;
}
</style>
