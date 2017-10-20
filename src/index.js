import Builder from './components/Builder.vue'
import Navigation from './components/Navigation.vue'
import Drawer from './components/Drawer.vue'
import Table from './components/Table.vue'


var plugin = {
    install( Vue ){
        Vue.component( 'ninja-builder', Builder );
        Vue.component( 'ninja-nav', Navigation );
        Vue.component( 'ninja-drawer', Drawer );
        Vue.component( 'ninja-table', Table );
    }
}

if (typeof window !== 'undefined') {
  'Vue' in window && window.Vue.use(plugin)
}

export default plugin;

export {
    Builder,
    Navigation,
    Drawer,
    Table,
};
