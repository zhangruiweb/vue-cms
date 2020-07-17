<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
        <router-view/>
    </div>
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
                    path: '/classify'
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
    font-family: "Microsoft YaHei"
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
.content{
    height:93%;
}
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7%;
    margin: 0;
    border-top: 1px solid #e2e2e2;
    /* padding-top: 0.06rem;
    padding-bottom: 0.12rem; */
    background-color: #fff;
}
</style>
