<template lang="html">
    <transition name="drawer">
        <div class="ninja-drawer" v-bind:class="{ hasChild: hasChild && ! child }">
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
    </transition>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: [ 'child', 'backroute' ],
    computed: {
        hasChild: function() {
            return this.$route.meta.childDrawer;
        }
    }
}
</script>

<style lang="scss" scoped>
.ninja-drawer {
    width: 50%;
    position: fixed;
    top: 0; right: 0; bottom: 0;
    padding: 40px;
    background-color: #EBEDEE;
    transition: all .4s;

    // Nested drawer
    .ninja-drawer {

        /* Seperate from main drawer. */
        border-left: 1px solid #D3D5D6;
        // background-color: white;
        // box-shadow: -5px 0 20px -10px #888;
        // box-shadow: inset 5px 0 20px -10px #888;
    }

    &.hasChild {
        right: 50%;
        z-index: 0;
    }

    // [Hack] Cover potential gaps in transition timing.
    &:after {
        content: ' ';
        z-index: -2;
        position: absolute;
        top: 0; right: -25%;
        width: 25%;
        height: 100%;
        background-color: inherit;
   }
}
header {
    display: flex;
    margin-bottom: 40px;
    flex-direction:row-reverse;
}
.drawer-enter-active,
.drawer-leave-active {
  transition: margin-right .4s;
}
.drawer-enter, .drawer-leave-to {
    margin-right: -50%;
}
.hasChild {
    &.drawer-leave-to .ninja-drawer {
        // Also transition nested drawer.
        margin-right: -50%;
    }
    &.drawer-leave-active {
        // Double transition time to account for nested drawer.
        transition: margin-right .8s;
    }
    &.drawer-leave-to {
        // Double transition distance to account for nested drawer.
        margin-right: -100%;
    }
}
</style>
