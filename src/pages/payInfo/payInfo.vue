<template>
  <view class="page">
    <Navigation title="缴费通知"></Navigation>
    <view class="car">
      <u-form :labelStyle="labelStyle" labelPosition="left" label-width="130" :model="form" :rules="rules" ref="uForm">
        <u-form-item label="消息日期" prop="date" borderBottom ref="item1">
          <u-input v-model="form.date" border="none"></u-input>
        </u-form-item>
        <u-form-item label="通知类型" prop="type" borderBottom ref="item1">
          <u-input v-model="form.type" border="none"></u-input>
        </u-form-item>
        <u-form-item label="缴费区间" prop="section" borderBottom ref="item1">
          <u-input v-model="form.section" border="none"></u-input>
        </u-form-item>
        <u-form-item label="合同编号" prop="number" borderBottom ref="item1">
          <u-input v-model="form.number" border="none"></u-input>
        </u-form-item>
        <u-form-item label="租赁位置" prop="location" borderBottom ref="item1">
          <u-input v-model="form.location" border="none"></u-input>
        </u-form-item>
        <u-form-item label="到期日期" prop="expire" borderBottom ref="item1">
          <u-input v-model="form.expire" border="none"></u-input>
        </u-form-item>
      </u-form>
    </view>
    <button @click="submit" class="button">立即缴费</button>
  </view>
</template>

<script>
import Navigation from '@/components/navigation'
export default {
  components: { Navigation },
  data() {
    return {
      labelStyle: {
        color: '#999999',
      },
      form: {
        date: '2023-12-12',
        type: '正常缴费通知',
        section: 'xxxxxx',
        number: 'HT0000000000',
        location: 'xxxxxx',
        expire: '2025-12-12',
      },
    }
  },
  computed: {},
  methods: {
    submit() {},
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
.car {
  width: 340px;
  margin-left: 50%;
  margin-top: 30px;
  transform: translate(-50%);
  background-color: #fff;
  box-shadow: 0px 23px 35px -20px rgba(94, 93, 93, 0.4);
  border-radius: 27px;
  padding: 0px 10px 50px 10px;
}
.button {
  position: fixed;
  bottom: 20%;
  width: 265px;
  margin-left: 50%;
  transform: translate(-50%);
  border-radius: 23px;
  background-color: #587edd;
  color: #fff;
}
</style>
