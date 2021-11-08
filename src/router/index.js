import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/view',
		name: 'View',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/view.vue'),
	},
	{
		path: '/write',
		name: 'Write',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/write.vue'),
	},
	{
		path: '/list',
		name: 'List',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/list.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
