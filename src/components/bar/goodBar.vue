<template>
<div class="goodBar">
    <div class="goodTitle" ><span>优品推荐</span></div>
    <ul class="hot-list">
        <li class="hot-unit">
            <p class="goods">
                <img src="@/assets/images/timg.jpg" alt="图片" class="imgStyle">
                <span>蜡笔小新</span>
            </p>
            <p class="intr">
                <span>￥11</span>
                <span>已收11</span>
            </p>
        </li>
        <li class="hot-unit">
            <p class="goods">
                <img src="@/assets/images/timg.jpg" alt="图片" class="imgStyle">
                <span>蜡笔小新</span>
            </p>
            <p class="intr">
                <span>￥11</span>
                <span>已收11</span>
            </p>
        </li>
        <li class="hot-unit">
            <p class="goods">
                <img src="@/assets/images/timg.jpg" alt="图片" class="imgStyle">
                <span>蜡笔小新</span>
            </p>
            <p class="intr">
                <span>￥11</span>
                <span>已收11</span>
            </p>
        </li>
        <li class="hot-unit">
            <p class="goods">
                <img src="@/assets/images/timg.jpg" alt="图片" class="imgStyle">
                <span>蜡笔小新</span>
            </p>
            <p class="intr">
                <span>￥11</span>
                <span>已收11</span>
            </p>
        </li>
        <li class="hot-unit">
            <p class="goods">
                <img src="@/assets/images/timg.jpg" alt="图片" class="imgStyle">
                <span>蜡笔小新</span>
            </p>
            <p class="intr">
                <span>￥11</span>
                <span>已收11</span>
            </p>
        </li>
    </ul>
</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.goodBar{
    font-size: 0.25rem;
    .goodTitle{
        padding:20px 0;
        span{
            color: #c2c2c2;
        }
    }
    .hot-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /* align-items: center; */
        align-content: flex-start;
        width: 95%;
        margin:0 auto;
        .hot-unit{
            width:45%;
            padding-bottom: 30px;
            .goods{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 100%;
                }
            }
            .intr{
                display: flex;
                justify-content: space-between;
            }

        }
    }
}
</style>
