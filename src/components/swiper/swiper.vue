<template>
<div class="swiper" ref="swiper">
    <ul class="swiper-content">
        <li class="swiper-car" v-for="(items,i) in swiperData" :key="i" :style={backgroundColor:items.color}>
            1
        </li>
    </ul>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data () {
        return {
            swiperData: [
                {
                    color: 'red'
                },
                {
                    color: 'blue'
                },
                {
                    color: 'green'
                },
                {
                    color: 'pink'
                }

            ],
            swiper: null

        }
    },
    mounted () {
        this.$nextTick(() => {
            this.swiper = new BScroll(this.$refs.swiper, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    speed: 900
                }
            })
        })
    }
}
</script>
<style lang="scss" scoped>
@mixin width-height($width, $height){
    width: $width;
    height: $height;
}
.swiper {
    @include width-height(100%,180px);
    overflow: hidden;
    .swiper-content {
        @include width-height(400%,100%);
        .swiper-car {
            @include width-height(25%,100%);
            float: left;
        }
    }
}
</style>
