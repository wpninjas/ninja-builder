<template lang="html">
    <div class="ninja-builder">
        <header class="topbar">
            <div class="wrap">
                <div class="title">
                    <slot name="title">{{ title }}</slot>
                </div>
            </div>
        </header>
        <nav>
            <div class="wrap">
                <slot name="nav"></slot>
            </div>
        </nav>
        <main>
            <slot></slot>
        </main>
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
header {
    display: block;
    height: 52px;
    line-height: 52px;
    margin-bottom: 40px;
    background-color: #ebedee;
}

.title {
    height: 52px; // Match the header height;
}

nav {
    margin-bottom: 40px;
}

main {
    // This section intentionally left blank.
}
</style>
