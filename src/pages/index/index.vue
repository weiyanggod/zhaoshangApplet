<template>
  <view>
    <Navigation></Navigation>
    <view class="mt-20 buttons">
      <view class="item mt-20" v-for="(item, index) in list" :key="index" @click="to(item)">
        <button class="button" :style="{ backgroundColor: item.color }">{{ item.text }}</button>
        <img class="icon" :src="item.url" />
      </view>
    </view>
  </view>
</template>

<script>
import Navigation from '@/components/navigation'
export default {
  components: { Navigation },
  data() {
    return {
      list: [
        {
          text: '立即绑定',
          url: '/static/index/立即绑定.png',
          color: '#4284ff',
        },
        {
          text: '缴费通知',
          url: '/static/index/缴费通知.png',
          color: '#3db7fb',
        },
        {
          text: '立即缴费',
          url: '/static/index/立即缴费.png',
          color: '#ff9095',
        },
      ],
    }
  },
  methods: {
    to(data) {
      if (data.text === '立即绑定') {
        uni.navigateTo({ url: '/pages/binding/binding' })
      }
      if (data.text === '缴费通知') {
        this.showModal()
        // uni.navigateTo({ url: '/pages/payInfo/payInfo' })
      }
      if (data.text === '立即缴费') {
        this.showModal()
        // uni.navigateTo({ url: '/pages/pay/pay' })
      }
    },
    showModal() {
      uni.showModal({
        title: '提示!',
        content: '请先绑定合同',
        showCancel: false,
        confirmText: '确定',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/index/navigation.png');
  text-align: center;
  width: 100%;
  height: 88px;
  color: #fff;
}
.buttons {
  margin-left: 50%;
  transform: translate(-50%);
  width: 339px;
  .item {
    position: relative;
    .button {
      width: 339px;
      height: 77px;
      background-color: #4385ff;
      border-radius: 20px;
      text-align: center;
      line-height: 77px;
      color: #fff;
    }
    .icon {
      position: absolute;
      top: 50%;
      transform: translate(30%, -50%);
      width: 48px;
      height: 48px;
    }
  }
}
</style>
