<template>
  <div class="page">
    <u-navbar safeAreaInsetTop bgColor="#ebf1f3" title="历史跟踪记录" :autoBack="true"> </u-navbar>
    <div class="box" v-for="(i, ind) in trackCellList" :key="ind">
      <u-cell-group :border="false">
        <u-cell v-for="(item, index) in i" :key="index" :titleStyle="{ color: '#929292' }" :title="item.title">
          <view slot="value" style="color: ">
            <view v-if="item.title === '资料上传：'" class="flex-center">
              <view class="attachmentBox" @click="preview" v-if="item.title === '资料上传：'">
                <view class="icon t-icon-PDF ml-5"></view>
                <view class="ml-5" style="color: #1684fc">百事通法务公司及业务简介-2023-8.pdf</view>
              </view>
              <view class="icon t-icon-fujian ml-5" style="font-size: 10px" @click="uploadFile"></view>
            </view>
            <view v-else-if="item.title !== '当前主要问题描述：' && item.title !== '日志内容：'">
              {{ item.value }}
            </view>
          </view>
          <view slot="label">
            <view v-if="item.title === '当前主要问题描述：' || item.title === '日志内容：'">
              {{ item.value }}
            </view>
          </view>
        </u-cell>
      </u-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      trackCellList: [
        [
          {
            title: '日期：',
            value: '2023-11-01'
          },
          {
            title: '阶段：',
            value: '初始'
          },
          {
            title: '项目所在主体：',
            value: 'xxxx'
          },
          {
            title: '意向结果：',
            value: 'xxxx'
          },
          {
            title: '当前主要问题描述：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '日志内容：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '资料上传：',
            value: ''
          }
        ],
        [
          {
            title: '日期：',
            value: '2023-11-01'
          },
          {
            title: '阶段：',
            value: '初始'
          },
          {
            title: '项目所在主体：',
            value: 'xxxx'
          },
          {
            title: '意向结果：',
            value: 'xxxx'
          },
          {
            title: '当前主要问题描述：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '日志内容：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '资料上传：',
            value: ''
          }
        ],
        [
          {
            title: '日期：',
            value: '2023-11-01'
          },
          {
            title: '阶段：',
            value: '初始'
          },
          {
            title: '项目所在主体：',
            value: 'xxxx'
          },
          {
            title: '意向结果：',
            value: 'xxxx'
          },
          {
            title: '当前主要问题描述：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '日志内容：',
            value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
          },
          {
            title: '资料上传：',
            value: ''
          }
        ]
      ]
    }
  },
  computed: {},
  methods: {
    // 上传
    uploadFile() {
      console.log(999)
      uni.chooseMessageFile({
        count: 1,
        success: res => {
          console.log(res)
        }
      })
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
.page {
  width: 100%;
  display: block;
  padding: 20px;
  padding-top: 90px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  .box {
    box-sizing: border-box;
    padding: 0px 10px 30px 10px;
    border-radius: 27px;
    box-shadow: 0px 0px 5px 0px rgba(94, 93, 93, 0.4);
    background-color: #fff;
    margin-top: 15px;
  }
  .attachmentBox {
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    font-size: 10px;
    padding: 5px;
  }
}
</style>
