<template>
<div class="classify">
    <div class="menuBox">
        <menu-tab :menuData="menuData" @getMenuIndex="updateIndex"/>
    </div>
    <div class="detailBox">
        <div><span>{{menuData[menuIndex].title}}</span></div>
        <detail :goodsData="goodsData"/>
    </div>
</div>
</template>
<script>
import menuTab from '@/components/menuTab/menuTab'
import detail from '@/components/menuTab/detail'
let dataA = [
        {
            title: '测试111',
            priceText: '￥11',
            text: '已售1111'
        },
        {
            title: '测试111',
            priceText: '￥11',
            text: '已售1111'
        },
        {
            title: '测试111',
            priceText: '￥11',
            text: '已售1111'
        },
        {
            title: '测试111',
            priceText: '￥11',
            text: '已售1111'
        }
    ]
let dataB = [
        {
            title: '测试222',
            priceText: '￥22',
            text: '已售2222'
        },
        {
            title: '测试2222222',
            priceText: '￥22',
            text: '已售2222'
        },
        {
            title: '测试222',
            priceText: '￥222',
            text: '已售2222'
        },
        {
            title: '测试2222',
            priceText: '￥22',
            text: '已售222'
        }
    ]
export default {
    data () {
        return {
            menuData:[
                {
                    title: '测试标题1'
                },
                {
                    title: '测试标题2' 
                },
                {
                    title: '测试标题3'
                },
                {
                    title: '测试标题4'
                }
            ],
            goodsData: dataA,
            menuIndex: 0

        }
    },
    methods: {
        updateIndex (index) {
            this.menuIndex = index
            
        },
        
    },
    watch: {
        menuIndex (newV, oldV) {
            if (newV === 0) {
                this.goodsData = dataA
            }
            else {
                this.goodsData = dataB
            }
        }
    },
    components: {
        menuTab,
        detail
    }
}
</script>
<style lang="scss" scoped>
.classify{
    display: flex;
    justify-content: flex-start;
    height: 100%;
    .menuBox{
        width: 25%;
        border-right: 1px solid #d2d2d2;
    }
    .detailBox{
        width: 75%;
    }
}
</style>

