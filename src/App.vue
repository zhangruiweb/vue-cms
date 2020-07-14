<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div class="footer">
        <Nav :barData="barData" />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/nav/nav'
export default {
    name: 'App',
    data () {
        return {
            barData: [
                {
                    icon: 'icon-shouye',
                    text: '首页',
                    path: '/'
                },
                {
                    icon: 'icon-sousuo',
                    text: '分类',
                    path: '/category'
                },
                {
                    icon: 'icon-gouwuche',
                    text: '购物车',
                    path: '/shop'
                },
                {
                    icon: 'icon-wode',
                    text: '我的',
                    path: '/mine'
                }
            ]
        }
    },
    components: {
        Nav
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
li{
    list-style: none;
}
html,body{
    height: 100%;
}
#app {
    height: 100%;
}
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-bottom: 0.16rem;
}
</style>
