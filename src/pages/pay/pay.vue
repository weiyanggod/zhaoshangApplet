<template>
  <view>
    <Navigation title="立即缴费"></Navigation>
    <view class="search">
      <u-search :showAction="false" placeholder="输入关键词" v-model="value"></u-search>
    </view>
    <view class="box">
      <view>
        <view class="title">选择合同编号</view>
        <view class="list">
          <view class="item">
            <u-radio-group v-model="form.number" placement="column">
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="HT0001" name="HT0001"> </u-radio>
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="HT0002" name="HT0002"> </u-radio>
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="HT0003" name="HT0003"> </u-radio>
            </u-radio-group>
          </view>
        </view>
        <view class="title">选择缴费周期</view>
        <view class="list">
          <view class="item">
            <u-radio-group v-model="form.number" placement="column">
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="一个月" name="一个月"> </u-radio>
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="三个月" name="三个月"> </u-radio>
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="三个月以上" name="三个月以上">
              </u-radio>
            </u-radio-group>
          </view>
        </view>
        <view class="title">选择逾期标识</view>
        <view class="list">
          <view class="item">
            <u-radio-group v-model="form.number" placement="column">
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="正常" name="正常"> </u-radio>
              <u-radio shape="square" :customStyle="{ marginBottom: '20px' }" label="逾期" name="逾期"> </u-radio>
            </u-radio-group>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view class="flex-ac-sb" style="width: 40%">
        <view>合计:</view>
        <view style="color: #4137bc"> ￥196.00 </view>
      </view>
      <view style="width: 100px">
        <u-button
          color="#5d44a4"
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
        number: '',
      },
    }
  },
  computed: {},
  methods: {
    toPayMode() {
      uni.navigateTo({ url: '/pages/pay/components/payMode' })
    },
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
  onUnload() {},
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

.box {
  width: 80%;
  margin-left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 23px 35px -20px rgba(94, 93, 93, 0.4);
  border-top: 0px;
  padding-left: 20px;
  padding-top: 10px;
  .title {
    color: #999999;
  }
  .item {
    margin: 20px 0px 10px 5px;
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
