<template lang="html">
    <nav>
        <slot></slot>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
a {
    color: #424242;
    display: inline-block;
    margin: 16px 25px 0 0;
    padding-bottom: 8px;
    text-decoration: none;
}
a.router-link-active {
    border-bottom: 2px solid #424242;
}
</style>
