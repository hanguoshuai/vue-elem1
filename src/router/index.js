import Vue from 'vue'
import Router from 'vue-router'
import Content1 from '@/components/content'
import Bbb from '@/components/sellers'
import Aaa from '@/components/aaa'
import ccc from '@/components/ccc'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Content1',
			component: Content1,
			
			children: [{
				path: '/123',
				component: Aaa
			},
			{
				path:'/bbb',
				component:Bbb
			},
			{
				path:'/ccc',
				component:ccc
			}
			]
	}
	]
})