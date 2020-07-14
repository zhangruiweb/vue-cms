<template>
<div class="nav">
<ul class="nav-list">
    <li class="list-bar" v-for="(item,i) in barData" :key="i">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.text}}</span>
    </li>
</ul>
</div>
</template>
<script>
export default {
    props: ['barData'],
    data () {
    }
}
</script>
<style scoped lang='scss'>
$iconSize: 0.37rem;
$spanSize: 0.16rem;
.nav{
    .nav-list{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .list-bar{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: $spanSize;
            i{
                font-size: $iconSize; 
            }
        }
    }

}
</style>
