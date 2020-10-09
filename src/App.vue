<template>
<div id="main">
  <nav>
    <h1><router-link :to="{name:'Home'}">Twoot</router-link></h1>
    <div v-if="user">{{user.username}}</div>
  </nav>
  <router-view/>
</div>
</template> 

"
<script>
import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  name: 'App',

  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}

nav {
  margin-top: 0;
  width: 100%;
  height: 100px;
  background: lightskyblue;
  color: white;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

nav h1 {
  padding-top: 30px;
  padding-left: 20px;
}

nav h1 a  {
  color: inherit;
  text-decoration: none;
}

nav div {
  margin-top: 40px;
  margin-right: 20px;
}
</style>
