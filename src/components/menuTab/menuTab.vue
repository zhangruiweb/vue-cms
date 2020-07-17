<template>
<div class="menuTab">
    <ul class="menu-list">
        <li class="menu-unit" v-for="(items,i) in menuData" :key="i"
            @click="changMenu(i)">
            {{items.title}}
        </li>
    </ul>
</div>
</template>
<script>
export default {
    props: ['menuData'],
    methods: {
        changMenu (i) {
            this.$emit('getMenuIndex', i)
        }
    }
}
</script>
<style lang="scss" scoped>
.menu-list{
    font-size: 15px;
    .menu-unit{
        padding: 0.2rem;
    }
    .active{
        color: red;
    }
}
</style>
