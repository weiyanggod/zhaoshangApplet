<template>
  <view>
    <Navigation title="立即缴费"></Navigation>
    <view class="search">
      <u-search
        placeholder="输入关键词"
        v-model="value"
        :actionStyle="{ color: '#3b7bff', 'font-weight': 600, 'font-size': '14px' }"
      ></u-search>
    </view>
    <view class="text">搜索结果</view>
    <view class="ml-15">
      <u-checkbox-group v-model="checkboxValue" placement="column">
        <view class="box" v-for="(item, index) in list" :key="index">
          <u-checkbox name="HT000000001"> </u-checkbox>
          <view class="right-text">
            <view style="font-size: 14px; color: #000">物业服务费</view>
            <view>合同编号：HT000000001</view>
            <view>缴费周期：2023/1/1-2023/12/12</view>
            <view style="display: flex; align-items: center">
              <view>缴费金额：<text :style="{ color: item.isOverdue ? '#f26161' : '' }"> 1895.50元</text></view>
              <view class="ml-5">
                <u-tag v-if="!item.isOverdue" text="正常" type="success" size="mini" plain plainFill></u-tag>
                <u-tag v-else text="逾期" type="error" size="mini" plain plainFill></u-tag>
              </view>
            </view>
          </view>
        </view>
      </u-checkbox-group>
    </view>
    <view class="bottom">
      <view class="flex-ac-sb" style="width: 35%">
        <view>合计：</view>
        <view style="color: #3b7bff"> ￥196.00 </view>
      </view>
      <view style="width: 100px">
        <u-button
          color="#587edd"
          type="primary"
          size="small"
          shape="circle"
          text="确认支付"
          @click="toPayMode"
        ></u-button>
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
      value: '',
      form: {
        number: ''
      },
      list: [
        {
          isOverdue: false
        },
        {
          isOverdue: true
        },
        {
          isOverdue: true
        }
      ],
      checkboxValue: ''
    }
  },
  computed: {},
  methods: {
    toPayMode() {
      uni.navigateTo({ url: '/pages/pay/components/payMode' })
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
.search {
  margin-top: 20px;
  padding: 0 20px;
}
.text {
  margin-left: 20px;
  font-weight: 900;
  margin: 20px 0px 20px 20px;
  color: #333333;
  font-size: 14px;
}
.box {
  box-sizing: border-box;
  margin-left: 50%;
  margin-top: 10px;
  transform: translate(-50%);
  padding: 10px;
  width: 360px;
  height: 106px;
  box-shadow: 13px 20px 20px -23px rgba(94, 93, 93, 0.4);
  border-radius: 15px;
  display: flex;
  align-items: center;

  .right-text {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    height: 100%;
    justify-content: space-around;
    color: #999999;
  }
}
.bottom {
  position: fixed;
  bottom: 3%;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
