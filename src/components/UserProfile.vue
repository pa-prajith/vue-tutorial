<template>
<div class="user-profile">
    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{user.userName}}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
            <strong>Followers:</strong>{{followers}}
        </div>
        <form class="user-profile__create-twoot" @submit.prevent="createTwoot()">
          <label for="newTwoot"><strong>New Twoot</strong></label>
          <textarea name="newToot" id="newToot" rows="4" v-model="newTwoot"></textarea>
          <div class="user-profile__create-twoot-type">
            <label for="newTwootType"><strong>Type</strong></label>
            <select name="newTwootType" id="newTwootType" v-model="newTwootTypeValue">
              <option :value="opt.value" v-for="(opt, idx) in twootTypes" :key="idx">{{opt.option}}</option>
            </select>
          </div>
          <div class="user-profile__twoot-button">
            <button type="submit">Twoot!!!</button>
          </div>
        </form>
        
    </div>
    <div class="user-profile__twoot-wrapper">
        <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.userName" :twoot="twoot" @favorite="toggleFavorite"/>
    </div>
</div>
</template>

<script>

import TwootItem from './TwootItem';

export default {
  name: 'UserProfile',
  components: {
      TwootItem
  },
  
  data() {
      return {
        newTwoot: '',
        newTwootTypeValue: 'instant', 
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
        },
        twootTypes: [
          {
            value: 'draft', 
            option: 'Draft'
          },
          {
            value: 'instant', 
            option: 'Instant Twoot'
          }
        ],
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
     },
     toggleFavorite(id) {
         console.log(`User click toggle favorite ${id}`);
     },
     createTwoot() {
       console.log(this.newTwoot, this.newTwootTypeValue);
       if(this.newTwoot.length > 0 && this.newTwootTypeValue === 'instant') {
         this.user.twoots.unshift({
           id: this.user.twoots.length,
           content: this.newTwoot
         });
       }
       this.newTwoot = '';
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

.user-profile__create-twoot {
  border-top: 1px solid #DFE3E8;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.user-profile__create-twoot-type {
  margin-top: 7px;
}

.user-profile__create-twoot-type select {
  margin-left: 10px;
}

.user-profile__twoot-button button {
  width: 90%;
  margin: 10px 20px;
  text-align: center;
  background-color: #000000;
  padding: 10px;
  color: white;
  font-weight: bold;
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
