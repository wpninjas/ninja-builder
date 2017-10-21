<template lang="html">
    <div class="ninja-builder">
        <div class="topbar">
            <div class="title">
                <slot name="title">{{ title }}</slot>
            </div>
        </div>
        <div style="padding: 0 40px;">
            <slot name="header"></slot>
            <main class="container" v-bind:class="{ drawer: this.$route.meta.drawer }">
                <slot></slot>
            </main>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import VueRouter from 'vue-router'
export default {
    data: function(){
        return {
            title: 'Ninja Builder'
        }
    }
}
</script>

<style lang="scss">
.button {
    color: white;
    padding: 15px 30px;
    border-radius: 5px;
    text-decoration: none;
}
.button-primary {
    background-color: #1EA9EA;
}
.button-drawer {
    font-size: 1.5em;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    line-height: 55px;
    text-align: center;
    padding: 0;
    position: fixed;
    right: 40px; bottom: 40px;
    transition: transform .4s;

    &:hover {
        transform: rotate( 180deg );
        transform-origin: center;
    }
}
</style>

<style lang="scss" scoped>
.wrap {
    width: 720px;
    margin: auto;
    max-width: 100%;
}
.ninja-builder {
    font-size: 16px;
    font-family: "Segoe UI";
}
.topbar {
    display: block;
    height: 52px;
    line-height: 52px;
    padding: 0 40px;
    margin-bottom: 30px;
    background-color: #ebedee;
}

.title {
    height: 52px; // Match the header height;
}

.container {
    animation-duration: .4s;
    animation-name: slide-center;
}
.container.drawer {
    width: 50%;
    animation-duration: .4s;
    animation-name: slide-left;
}
.container.drawer .wrap {
    margin-right: 50%;
}

@keyframes slide-left {
    from { margin-left: 25%; }
    to { margin-left: 0; }
}
@keyframes slide-center {
    from { margin-right: 25%; }
    to { margin-right: 0; }
}
</style>
