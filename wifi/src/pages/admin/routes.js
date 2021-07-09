export default [
    { path: '/', component: () => import('./login.vue') },
    { path: '/device', component: () => import('./device.vue') },
    { path: '/create', component: () => import('./create.vue') ,props: route => ({ addr: route.query.addr,id: route.query.id})},
    { path: '/catall', component: () => import('./catall.vue') ,props: route => ({ addr: route.query.addr})},
]
