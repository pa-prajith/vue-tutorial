import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from './../views/UserProfile.vue';
import Admin from './../views/Admin.vue';
import Store from './../store';
import {users} from './../assets/Users';


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  const user = Store.state.user;
  if(!user) {
    await Store.dispatch('setUser', users[0]);
  }
  const isAdmin = false;
  const requireAdmin = to.matched.some(record => record.meta.requiresAdmin);
  if(requireAdmin && !isAdmin) {
    next({name: 'Home'});
  } else {
    next();
  }
});

export default router;
