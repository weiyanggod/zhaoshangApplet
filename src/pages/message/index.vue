<!-- 消息中心 -->
<template>
  <view>
    <view style="width: 100%; height: 100px; background-color: #fff"></view>
    <u-navbar bgColor="#ebf1f3" title="消息中心" :autoBack="true"> </u-navbar>
    <u-list>
      <u-list-item v-for="(item, index) in 10" :key="index">
        <u-cell>
          <view slot="title">
            <view class="text">【上海百事通法务信息技术有限公司】</view>
            <view class="text" style="margin-top: 10px">当前项目已超7天无项目进展,请重点关注</view>
          </view>
          <view slot="value">
            <view style="color: #a1a1a1">2024/01/01</view>
            <view class="details" @click="toDetails">
              详情
              <u-icon name="arrow-right" color="#265fb4" size="16"></u-icon>
            </view>
          </view>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    toDetails() {
      uni.navigateTo({ url: '/pages/index/details/details' })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {}
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style lang="scss" scoped>
.text {
  color: #356382;
  font-weight: 600;
  text-align: left;
}
.details {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #265fb4;
}
</style>
