<template>
<div class="nav">
<ul class="nav-list">
    <li v-for="(item,i) in barData" :key="i">
    <router-link :to="item.path" class="list-bar">
        <i class="iconfont" :class="item.icon"></i>
        <span class="text">{{item.text}}</span>
    </router-link>
    </li>
</ul>
</div>
</template>
<script>
export default {
    props: ['barData']
}
</script>
<style scoped lang='scss'>
$iconSize: 0.37rem;
$spanSize: 0.16rem;
$colorD2: #666;
a{
    text-decoration: none;
}
.nav{
    margin-top:0.09rem;
    .nav-list{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .list-bar{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: $spanSize;
            color: $colorD2;
            .iconfont{
                font-size: $iconSize;
            }
            .text {
                font-size: $spanSize;
            }
        }
        .router-link-exact-active{
            color:blueviolet;
        }
    }

}
</style>
