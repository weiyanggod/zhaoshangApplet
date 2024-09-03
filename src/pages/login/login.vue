<template>
  <view class="page">
    <u-toast ref="uToast"></u-toast>
    <img src="@/static/登录页背景.png" class="bg" lazy-load />
    <view class="text">
      <view>你好,</view>
      <view style="margin-top: 10px">欢迎进入招商项目演示平台</view>
    </view>
    <view class="logon-button">
      <u-button
        type="primary"
        @getphonenumber="getphonenumber"
        :open-type="agree[0] === true ? 'getPhoneNumber' : ''"
        text="手机号快捷登录"
        color="#356382"
        shape="circle"
        @click="click"
      ></u-button>
      <view class="agreement">
        <u-checkbox-group v-model="agree" placement="column">
          <u-checkbox inactiveColor="#303940" iconColor="#303940" :name="true"> </u-checkbox>
        </u-checkbox-group>
        <view style="display: flex">
          我已阅读并同意 <text style="color: #1684fc" @click="toAgreement">《用户服务协议》及《隐私政策》协议</text>
        </view>
      </view>
    </view>
    <!-- <view class="restLogin" @click="restLoginBtn"> 其他手机号登录 </view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      openType: '',
      agree: []
    }
  },
  methods: {
    click() {
      if (!this.agree[0]) {
        this.$refs.uToast.show({
          type: 'warning',
          message: '请先阅读并同意《用户服务协议》及《隐私政策》协议'
        })
      }
    },
    async getphonenumber(data) {
      const app = getApp()
      if (data.detail.code) {
        const res = await app.login({ code: data.detail.code })
        if (res.code !== 200) {
          this.$refs.uToast.show({
            type: 'warning',
            message: '当前手机号暂无登录权限'
          })
        } else {
          uni.setStorageSync('token', res.data)
          this.$refs.uToast.show({
            type: 'success',
            message: '登录成功'
          })
          uni.navigateTo({
            url: '/pages/index/index'
          })
        }
      }
    },
    // 其他手机号登录
    restLoginBtn() {
      uni.navigateTo({
        url: '/pages/restLogin/index'
      })
    },
    // 协议
    toAgreement() {
      uni.navigateTo({ url: '/components/agreement' })
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
  .logon-button {
    position: absolute;
    top: 40%;
    width: 80%;
    padding: 0% 10%;
  }
  .agreement {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .restLogin {
    position: absolute;
    top: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #1684fc;
  }
}
</style>
