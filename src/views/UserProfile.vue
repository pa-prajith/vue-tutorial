<template>
<div class="user-profile">
    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{state.user.username}}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
            <strong>Followers:</strong>{{state.followers}}
        </div>
        <CreateTwoot @addtwoot="createTwoot"/>
    </div>
    <div class="user-profile__twoot-wrapper">
        <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :username="state.user.username" :twoot="twoot" @favorite="toggleFavorite"/>
    </div>
</div>
</template>

<script>

import TwootItem from './../components/TwootItem';
import CreateTwoot from './../components/CreateTwoot';
import {reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import {users} from './../assets/Users';

export default {
  name: 'UserProfile',
  components: {
      TwootItem,
      CreateTwoot
  },

  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      followers: 0,
      user: users[userId.value] || users[0]
    });

    const fullName = computed(() => `${state.user.firstname} ${state.user.lastname}`);

    const toggleFavorite = (id) => {
       console.log(`User click toggle favorite ${id}`);
    };
      
    const createTwoot = ({content}) => {
      state.user.twoots.unshift({
        id: state.user.twoots.length,
        content: content
      });
    };
    return {
      state,
      fullName,
      toggleFavorite,
      createTwoot
    };
  },


}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 90%;
    padding: 50px 5%;
}

.user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}
.user-profile__admin-badge {
    background: purple;
    color: white;
    border-radius: 5px;
    padding: 0 10px;
    font-weight: bold;
    margin-left: auto;
}

h1 {
    margin: 0;
}
</style>
