import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  HomeView,
  CounterView,
  CarsView,
  VmailView,
  NotFoundView,
  DashboardView,
  VmailMailView,
  VmailForgetView,
  FormsView,
} from '@/views';
import ReactionTimer from '@/views/ReactionTimer/ReactionTimer.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView,
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarsView,
  },
  {
    path: '/vmail',
    name: 'vmail',
    component: VmailView,
  },
  {
    path: '/vmail/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/vmail/mail',
    name: 'mail',
    component: VmailMailView,
  },
  {
    path: '/vmail/forget',
    name: 'forget',
    component: VmailForgetView,
  },
  {
    path: '/forms',
    name: 'forms',
    component: FormsView,
  },
  {
    path: '/reactionTimer',
    name: 'reactionTimer',
    component: ReactionTimer,
  },
  {
    path: '/*',
    name: '404',
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
