import Vue from 'vue';
import VueRouter from 'vue-router';
import NinjaBuilder from './index';
import { Builder } from './index';

Vue.use( VueRouter );
Vue.use( NinjaBuilder )

// Global object data store.
window.data = {
}

var Content = {
    template: '<div class="wrap">[CONTENT]<router-view /></div>'
}
var Drawer = {
    template: '<ninja-drawer>[DRAWER]<router-view /></ninja-drawer>'
}
var ChildDrawer = {
    template: '<ninja-drawer :child="true">[CHILD DRAWER]</ninja-drawer>'
}

var routes = [
    { path: '/', redirect: '/content' },
    { path: '/content', component: Content, children: [
        // The drawer is a child of the content.
        { path: 'drawer', component: Drawer, children: [
            // The child drawer is a child of the drawer.
            { path: 'child', component: ChildDrawer, meta: { childDrawer: true } }
        ] }
    ] },
]

var router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h({
      template: `
        <ninja-builder>
            <template slot="nav">
                <router-link to="/content">Content</router-link>
                <router-link to="/content/drawer">Drawer</router-link>
                <router-link to="/content/drawer/child">Child Drawer</router-link>
            </template>
            <router-view />
        </ninja-builder>
      `
  })
})
