<template>
    <form class="user-profile__create-twoot" @submit.prevent="createTwoot()">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea name="newToot" id="newToot" rows="4" v-model="state.newTwoot"></textarea>
        <div>
            Chars({{newTwootCharCount}})
        </div>
        <div class="user-profile__create-twoot-type">
        <label for="newTwootType"><strong>Type</strong></label>
        <select name="newTwootType" id="newTwootType" v-model="state.newTwootTypeValue">
            <option :value="opt.value" v-for="(opt, idx) in state.twootTypes" :key="idx">{{opt.option}}</option>
        </select>
        </div>
        <div class="user-profile__twoot-button">
        <button type="submit">Twoot!!!</button>
        </div>
    </form>
</template>

<script>

import {reactive, computed} from 'vue';

export default {
  name: 'CreateTwoot',

  setup(props, context) {
      const state = reactive({
        newTwoot: '',
        newTwootTypeValue: 'instant', 
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
      });

      const newTwootCharCount = computed(() => state.newTwoot.length);

      const createTwoot = () => {
        if(state.newTwoot.length > 0 && state.newTwootTypeValue === 'instant') {
         context.emit('addtwoot', {content: state.newTwoot});
        }
        state.newTwoot = '';
      };

      return {
          state,
          newTwootCharCount,
          createTwoot
      }
  }
}
</script>

<style>

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

</style>
