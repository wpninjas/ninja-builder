<template lang="html">
    <div class="ninja-drawer" v-bind:class="{ hasChild: $route.meta.childDrawer && ! child }">
        <header>
            <template v-if="backroute">
                <router-link :to="backroute" class="button button-primary">Close</router-link>
            </template>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: [ 'child', 'backroute' ]
}
</script>

<style lang="scss" scoped>
.ninja-drawer {
    width: 50%;
    position: fixed;
    top: 0; right: 0; bottom: 0;
    padding: 40px;
    background-color: #EBEDEE;

    &.hasChild {
        right: 50%;
    }
}
header {
    display: flex;
    margin-bottom: 40px;
    flex-direction:row-reverse;
}
.child-drawer {
    width: 50%;
    position: fixed;
    top: 0; right: 0; bottom: 0;
    padding: 40px;
    background-color: #EBEDEE;
}
</style>
