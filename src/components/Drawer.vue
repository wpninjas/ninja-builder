<template lang="html">
    <div class="ninja-drawer" v-bind:class="{ hasChild: $route.meta.childDrawer && ! child }">
        <header>
            <template v-if="! child">
                <router-link to="/content" class="button button-primary">Close</router-link>
            </template>
            <template v-else>
                <router-link to="/content/drawer" class="button button-primary">Back</router-link>
            </template>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            [DRAWER FOOTER]
        </footer>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: [ 'child' ]
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
