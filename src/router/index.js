import { createRouter, createWebHistory } from 'vue-router';
import Intro from '../views/Intro.vue';

const routes = [
	{
		path: '/Intro',
		name: 'Intro',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Intro.vue'),
	},
	{
		path: '/reservation',
		name: 'Reservation',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/reservation.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
