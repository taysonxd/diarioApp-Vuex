
export default {
	name: 'daybook',
	component: () => import(/* webpackChunkName: "daybookLayout" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
	children: [
		{
			path: '',
			name: 'noEntry',
			component: () => import(/* webpackChunkName: "noEntrySelected" */ '@/modules/daybook/views/NoEntrySelected.vue')
		},
		{
			path:':id',
			name: 'EntryView',
			component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/daybook/views/EntryView.vue')
		}
	]
}