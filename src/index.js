import Table from './components/Table.vue'
import Drawer from './components/Drawer.vue'
import Builder from './components/Builder.vue'

var plugin = {
    install( Vue ){
        Vue.component( 'ninja-table', Table );
        Vue.component( 'ninja-drawer', Drawer );
        Vue.component( 'ninja-builder', Builder );
    }
}

if (typeof window !== 'undefined') {
  'Vue' in window && window.Vue.use(plugin)
}

export default plugin;

export {
    Builder,
    Drawer,
    Table,
};
