<template>
    <div class="login">
        <el-input v-model="userName" placeholder="请输入内容" class="user"></el-input>
        <el-input placeholder="请输入密码" v-model="passWord" show-password class="pass"></el-input>
    </div>
</template>
<script>
export default {
    data () {
        return {
            userName: '',
            passWord: ''
        }
    },
    created () {

    },
    mounted () {

    },
    computed () {
    },
    method () {

    }
}
</script>
<style scoped>
.user{
    width:25px
}

</style>
