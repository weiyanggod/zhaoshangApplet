<template>
  <div class="page">
    <u-navbar :leftIconSize="0" bgColor="#ebf1f3" title="秀洲项目中心" :autoBack="false"> </u-navbar>
    <img src="@/static/首页背景.jpg" class="bg" />
    <u-notice-bar
      color="#fff"
      bgColor="#1a293f"
      text="消息：{上海百事通}当前项目已超7天无项目进展,请重点关注"
      mode="link"
      url="/pages/message/index"
    ></u-notice-bar>
    <view class="user">
      <!-- 用户昵称 -->
      <view class="nickname" @click="isShow = !isShow">微信用户111</view>
      <!-- 解绑 -->
      <view v-if="isShow" class="unbind">解除绑定</view>
    </view>
    <view class="search">
      <u--input
        placeholder="输入项目搜索的项目"
        prefixIcon="search"
        prefixIconStyle="font-size: 22px;color: #909399"
        v-model="searchValue"
        shape="circle"
      ></u--input>
    </view>
    <view class="card" v-for="(item, index) in 3" :key="index">
      <img src="@/static/项目卡片背景.png" class="bg-img" />
      <view class="title">
        <view style="color: #3a596d">上海百事通法务信息科技有限公司</view>
        <view style="display: flex; align-items: center; justify-content: center; color: #265fb4" @click="details"
          >详情 <u-icon name="arrow-right" color="#265fb4" size="16"></u-icon>
        </view>
      </view>
      <view class="content">
        <view>项目所在地：xxxxxxxxxx</view>
        <view>投资总额：xxxxxxxxxx</view>
        <view>当前主要问题：xxxxxxxx</view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 解绑显示
      isShow: false,
      // 搜索内容
      searchValue: ''
    }
  },
  created() {
    // 判断是否登录过
    const openid = uni.getStorageSync('openid')
    // if (!openid) {
    //   uni.navigateTo({ url: '/pages/login/login' })
    // }
  },
  methods: {
    details() {
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
.page {
  width: 100%;
  background-color: #eff7ff;
  padding-bottom: 50px;
  position: relative;
  .bg {
    width: 100%;
    display: block;
    margin-top: 100px;
  }
  .user {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 10%;
    right: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nickname {
    color: #fff;
  }
  .unbind {
    margin-top: 5px;
    color: #3985da;
    background-color: #b2bac1;
    border-radius: 10px;
    text-align: center;
    padding: 3px 10px;
    animation: fade-in 0.5s;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .search {
    width: 80%;
    background-color: #fff;
    margin-left: 10%;
    border-radius: 20px;
    margin-top: 20px;
  }
  .card {
    position: relative;
    margin-top: 20px;
    margin-left: 5%;
    padding: 5%;
    width: 80%;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px rgba(187, 187, 187, 0.64);

    .bg-img {
      width: 115px;
      height: 103px;
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
    .title {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }
    .content {
      view {
        margin-top: 10px;
      }
    }
  }
}
</style>
