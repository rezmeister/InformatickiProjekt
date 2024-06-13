import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import InfoPage from '@/components/InfoPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import Characters from '@/components/Characters.vue';
import Locations from '@/components/Locations.vue';
import Episodes from '@/components/Episodes.vue';


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/info',
    name: 'InfoPage',
    component: InfoPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: Episodes
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
