<template>
  <view class="page">
    <Navigation title="缴费通知"></Navigation>
    <view class="car" v-for="(item, index) in 3" :key="index">
      <u-form :labelStyle="labelStyle" labelPosition="left" label-width="130" :model="form" ref="uForm">
        <u-form-item label="消息日期" prop="date" borderBottom ref="item1">
          <u-input v-model="form.date" border="none"></u-input>
        </u-form-item>
        <u-form-item label="通知类型" prop="type" borderBottom ref="item1">
          <u-input v-model="form.type" border="none"></u-input>
        </u-form-item>
        <u-form-item label="缴费区间" prop="section" borderBottom ref="item1">
          <u-input v-model="form.section" border="none"></u-input>
        </u-form-item>
        <u-form-item class="form-item" label="合同编号" prop="number" borderBottom ref="item1">
          <u-input v-model="form.number" border="none"></u-input>
        </u-form-item>
        <u-form-item label="租赁位置" prop="location" borderBottom ref="item1">
          <u-input v-model="form.location" border="none"></u-input>
        </u-form-item>
        <u-form-item label="到期日期" prop="expire" borderBottom ref="item1">
          <u-input v-model="form.expire" border="none"></u-input>
        </u-form-item>
      </u-form>
      <view class="mt-10" style="width: 80px; margin-left: auto">
        <u-button @click="submit" type="primary" shape="circle" size="small">立即缴费</u-button>
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
        date: '2023-12-12',
        type: '正常缴费通知',
        section: 'xxxxxx',
        number: 'HT0000000000',
        location: 'xxxxxx',
        expire: '2025-12-12'
      }
    }
  },
  computed: {},
  methods: {
    submit() {}
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {}
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 20px;
}
.car {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin-left: 50%;
  margin-top: 30px;
  transform: translate(-50%);
  background-color: #fff;
  box-shadow: 0px 23px 35px -20px rgba(94, 93, 93, 0.4);
  border-radius: 27px;
  padding: 0px 10px 10px 26px;
}
.button {
  width: 265px;
  border-radius: 23px;
  background-color: #587edd;
  color: #fff;
}

::v-deep .u-form {
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
