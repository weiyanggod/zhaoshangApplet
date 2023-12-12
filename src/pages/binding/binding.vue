<template>
  <view>
    <Navigation title="绑定"></Navigation>
    <view style="padding: 20px">
      <u-form labelPosition="top" label-width="auto" :model="form" :rules="rules">
        <u-form-item label="手机号" prop="phone" borderBottom>
          <u-input v-model="form.phone" placeholder="请输入手机号" border="none"></u-input>
        </u-form-item>
        <u-form-item label="合同编号" prop="number" borderBottom>
          <u-input v-model="form.number" placeholder="请输入合同编号" border="none"></u-input>
        </u-form-item>
      </u-form>
      <view class="mt-40">
        <u-button
          color="linear-gradient(to right, rgb(124, 110, 178), rgb(115, 155, 206))"
          type="primary"
          shape="circle"
          text="立即绑定"
          @click="binding"
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
      form: {
        phone: '',
        number: '',
      },
      rules: {
        phone: {
          type: 'string',
          required: true,
          message: '请填写手机号',
          trigger: ['blur', 'change'],
        },
        number: {
          type: 'string',
          required: true,
          message: '请填写合同编号',
          trigger: ['blur', 'change'],
        },
      },
    }
  },
  computed: {},
  methods: {
    binding() {
      // this.showModal('当前手机号无可绑定合同信息')
      this.showModal('当前合同已绑定联系人,无法再次绑定,请联系梅里集团业务人员办理')
    },
    showModal(text) {
      uni.showModal({
        title: '提示!',
        content: text,
        showCancel: false,
        confirmText: '确定',
      })
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

<style lang="scss" scoped></style>
