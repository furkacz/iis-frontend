import store from '@/store';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: process.env.NODE_ENV === 'production' ? routes.filter((route) => route.production) : routes,
});

router.beforeEach(() => {
  store.dispatch('setIsLoading', false);
  store.dispatch('clearLoadingMessage');
});

export default router;
