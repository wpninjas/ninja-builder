import Vue from 'vue';
import VueRouter from 'vue-router';
import NinjaBuilder from './index';

Vue.use( VueRouter );

// Global object data store.
window.data = {
}


var Hello = {
    template: '<div>Hello, Ninja Builder</div>'
}

var routes = [
    { path: '/', component: Hello }
]

var router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h({
      template: `
        <div id="app">
            <router-view />
        </div>
      `
  })
})
