<template>
<div class="user-profile">
    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{state.user.userName}}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
            <strong>Followers:</strong>{{state.followers}}
        </div>
        <CreateTwoot @addtwoot="createTwoot"/>
    </div>
    <div class="user-profile__twoot-wrapper">
        <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :username="state.user.userName" :twoot="twoot" @favorite="toggleFavorite"/>
    </div>
</div>
</template>

<script>

import TwootItem from './TwootItem';
import CreateTwoot from './CreateTwoot';
import {reactive, computed} from 'vue';

export default {
  name: 'UserProfile',
  components: {
      TwootItem,
      CreateTwoot
  },

  setup() {

    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        firstName: 'Fname',
        lastName: 'Lname',
        email: 'fname@email.com',
        userName: '_fname.lname',
        isAdmin: true,
        twoots: [
            {
                id: 1,
                content: 'This is the first tweet'
            },
            {
                id: 2,
                content: 'This is the second twoot and it has more chars'
             }
        ]
      }
    });

    const fullName = computed(() => `${state.user.firstName} ${state.user.lastName}`);
      
    // const fllowUser = () => {
    //     state.followers++;
    // };

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
   //   followUser,
      toggleFavorite,
      createTwoot
    };
  },


  //  mounted() {
  //    state.followUser();
  //  },
  //  watch: {
  //    followers(newFollowerCount, oldFollowerCount) {
  //      if(oldFollowerCount < newFollowerCount) {
  //        console.log(`${state.user.userName} has gained a follower!`);
  //     }
  //    }
  //  }

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
