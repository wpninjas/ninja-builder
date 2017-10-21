import Vue from 'vue';
import VueRouter from 'vue-router';
import NinjaBuilder from './index';

Vue.use( VueRouter );
Vue.use( NinjaBuilder )

// Global object data store.
window.data = {
    fields: [
        { id: 1, label: 'Full Name', required: false, settings: [
            { key: 'label' },
            { key: 'required' },
        ]},
        { id: 2, label: 'Email Address', required: false, settings: [
            { key: 'label' },
            { key: 'required' },
        ]},
        { id: 3, label: 'Submit', settings: [
            { key: 'label' },
        ]},
    ],
    field: function( fieldID ){
        return this.fields.find( function( field ){
            return field.id == fieldID;
        });
    },
    fieldTypes: [ 'textbox', 'checkbox', 'textarea', 'select', 'email', 'submit' ]
}

var Fields = {
    props: [ 'fields' ],
    template: `
    <div class="wrap">
        <div style="max-width: 100%;width: 600px;margin:auto;">
            <template v-for="field in fields">
                <router-link :to="{ name: 'fieldEdit', params: { id: field.id } }" tag="div">
                    <div style="background: #fff;border: 1px solid #ccc;border-radius: 4px;color: #888;cursor: pointer;margin-bottom: 20px;padding: 15px 20px;position: relative;">
                        {{ field.label }}
                    </div>
                </router-link>
            </template>
        </div>
        <router-link to="/fields/add" class="button button-primary button-drawer">+</router-link>
        <router-view />
    </div>
    `
}
var FieldAdd = {
    props: [ 'fieldTypes' ],
    template: `
    <ninja-drawer backroute="/fields">
        <div style="display: grid;grid-template-columns: 1fr 1fr;">
            <template v-for="field in fieldTypes">
                <div style="background: #3b454d;border-radius: 4px;color: #a2a5a8;font-size: 14px;padding:10px;margin: 0 10px 10px; position: relative;text-align: center;">
                    {{ field }}
                </div>
            </template>
        </div>
    </ninja-drawer>
    `,
}
var FieldEdit = {
    props: [ 'id' ],
    template: `
    <ninja-drawer backroute="/fields">
        <ul>
            <li>ID: {{ field.id }}</li>
            <li>Label: {{ field.label }}</li>
        </ul>
        <router-view />
    </ninja-drawer>
    `,
    computed: {
        field: function(){
            return data.field( this.id );
        }
    }
}
var Actions = {
    template: '<div class="wrap">[Action LIST]</div>'
}
var Example = { template: `
    <div style="margin-top:40px;">
        <div style="text-align: center;color: #bcbdbe;">This section intentionally left blank.</div>
        <router-link to="/example/drawer" class="button button-primary button-drawer">+</router-link>
        <router-view />
    </div>
    `
}
var ExampleDrawer = { template: `
    <ninja-drawer backroute="/example">
        <div>
            <div style="margin-bottom:10px;">
                <label style="display:block;margin-bottom:10px;">Setting</label>
                <input style="width:100%;padding:15px;border:0;" placeholder="Lorem ipsum" />
            </div>
            <fieldset style="border-color: #d3d5d6;border-radius: 2px;padding:20px;">
                <legend>Section</legend>
                <router-link to="/example/drawer/child">Open Child Drawer</router-link>
            </fieldset>
        </div>
        <router-view />
    </ninja-drawer>
    `
}
var ExampleChildDrawer = { template: `
    <ninja-drawer :child="true" backroute="/example/drawer">
        [Child Drawer Contents]
    </ninja-drawer>
    `
};

var routes = [
    // Root Redirect
    { path: '/', redirect: '/fields' },

    // FIELDS
    { name: 'fields', path: '/fields', component: Fields, props: { fields: data.fields }, children: [
        { path: 'add', component: FieldAdd, props: { fieldTypes: data.fieldTypes  },  meta: { 'drawer': true } },
        { name: 'fieldEdit', path: ':id/edit', component: FieldEdit, props: true,  meta: { 'drawer': true } }
    ] },

    // Actions
    { name: 'actions', path: '/actions', component: Actions },

    // Example (with Child Drawer)
    { name: 'example', path: '/example', component: Example, children: [
        { path: 'drawer', component: ExampleDrawer, meta: { 'drawer': true }, children: [
            { path: 'child', component: ExampleChildDrawer, meta: { 'drawer': true, 'childDrawer': true } }
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
            <header slot="header">
                <ninja-nav>
                    <router-link to="/fields">Form Fields</router-link>
                    <router-link to="/actions">Emails & Actions</router-link>
                    <router-link to="/example">Example</router-link>
                </ninja-nav>
                <h2 style="display: block;font-size:1.3em;font-weight: 600;">Contact Form</h2>
            </header>
            <router-view />
        </ninja-builder>
      `
  })
})
