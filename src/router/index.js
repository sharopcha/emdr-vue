import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import CheckEmail from '../views/CheckEmail.vue';
import Register from '../views/Register.vue';
import ResetPassword from '../views/ResetPassword.vue';
import AccountActivated from '../views/AccountActivated.vue';
import Therapy from '../views/Therapy.vue';
import Chat from '../views/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/checkEmail',
    name: 'CheckEmail',
    component: CheckEmail,
  },
  {
    path: '/resetPassword/:token',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/accountActivated/:token',
    name: 'AccountActivated',
    component: AccountActivated,
  },

  {
    path: '/therapy',
    name: 'Therapy',
    component: Therapy,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
