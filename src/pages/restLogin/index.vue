<template>
  <view class="page">
    <u-toast ref="uToast"></u-toast>
    <img src="@/static/登录页背景.png" class="bg" />
    <view class="text">
      <view style="margin-top: 10px">手机号登录</view>
    </view>
    <view class="login-input">
      <u--input border="bottom" placeholder="请输入手机号" v-model="phone"></u--input>
    </view>
    <view class="logon-button">
      <u-button type="primary" text="登录" color="#356382" shape="circle" @click="clickLogin"></u-button>
    </view>
    <view class="back" @click="back"><u-icon name="arrow-left"></u-icon></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    clickLogin() {
      if (!this.agree) {
        this.$refs.uToast.show({
          type: 'warning',
          icon: '',
          message: '请先阅读并同意xxxxxx协议',
          position: 'bottom'
        })
      }
    },
    back() {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  position: relative;
  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .text {
    position: absolute;
    top: 20%;
    font-size: 20px;
    color: #000;
    font-weight: 600;
    padding: 0% 10%;
  }
  .login-input {
    position: absolute;
    top: 30%;
    width: 80%;
    padding: 0% 10%;
  }
  .logon-button {
    position: absolute;
    top: 40%;
    width: 80%;
    padding: 0% 10%;
  }
  .back {
    position: absolute;
    top: 8%;
    left: 5%;
    cursor: pointer;
  }
}
</style>
