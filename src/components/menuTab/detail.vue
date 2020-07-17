<template>
<div class="detail">
    <ul class="detail-list">
        <li class="detail-unit" v-for="(items,i) in goodsData" :key="i">
            <img src="@/assets/images/timg.jpg" alt="图片">
            <div class="detail-intr">
                <p class="title">{{items.title}}</p>
                <p class="intr">
                    <span class="price-text">{{items.priceText}}</span>
                    <span class="text">{{items.text}}</span>
                </p>
            </div>
        </li>
    </ul>
</div>

</template>
<script>
export default {
    props: ['goodsData']
}
</script>
<style lang="scss" scoped>
.detail-list{
    .detail-unit{
        display: flex;
        justify-content: flex-start;
        padding: 10px 0px 10px 5px;
        img{
            width: 90px;
            height: 90px;
        }
        .detail-intr{
            width: 90%;
            padding: 10px;
            font-size: 14px;
            .title{
                color:#333;
            }
            .intr{
                display: flex;
                justify-content: space-between;
                width: 85%;
                padding-top: 20px;
                color: #c2c2c2;
                .price-text{
                    color: red;
                }
            }
        }
    }
}
</style>
