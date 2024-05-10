<template>
  <div class="page">
    <u-toast ref="uToast"></u-toast>
    <u-navbar :leftIconSize="0" bgColor="#ebf1f3" title="秀洲项目中心" :autoBack="false"> </u-navbar>
    <img src="@/static/首页背景.jpg" class="bg" />
    <u-notice-bar color="#fff" bgColor="#1a293f" :text="msgList" mode="link" url="/pages/message/index"></u-notice-bar>
    <view class="user">
      <!-- 用户昵称 -->
      <view class="nickname" @click="isShow = !isShow">用户：{{ userName }}</view>
      <!-- 解绑 -->
      <view v-if="isShow" class="unbind" @click="unbundle">解除绑定</view>
    </view>
    <view class="search">
      <u-search
        @search="search"
        @blur="search"
        :showAction="false"
        placeholder="输入项目搜索的项目"
        v-model="searchValue"
      ></u-search>
    </view>
    <view class="card" v-for="(item, index) in projectList" :key="index">
      <view class="title">
        <view>{{ item.field0002 }}</view>
        <view class="details" @click="details(item)"
          >详情 <u-icon name="arrow-right-double" color="#4F7FB0" size="16"></u-icon>
        </view>
      </view>
      <view class="content">
        <view class="left">
          <view>项目所在地：{{ item.field0150 }}</view>
          <view>投资总额：{{ item.field0072 ? item.field0072 + '万元' : '' }}</view>
          <view>当前主要问题：{{ item.field0164 ? item.field0164 : '' }}</view>
        </view>
        <view class="right">
          <img src="@/static/index/卡片右侧背景.png" />
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import { getUserNameApi, unbundleApi, getProjectList, getMsgListApi } from '@/api/index.js'
export default {
  components: {},
  data() {
    return {
      userName: '',
      // 解绑显示
      isShow: false,
      // 搜索内容
      searchValue: '',
      // 项目列表
      projectList: [],
      // 消息列表
      msgList: '',
      openid: ''
    }
  },
  async created() {
    const app = getApp()
    // 判断是否有token
    const openid = uni.getStorageSync('token')
    if (!openid) {
      uni.navigateTo({ url: '/pages/login/login' })
    } else {
      this.openid = openid
      const name = await getUserNameApi({ openid })
      this.userName = name.data?.field0001
      const res = await app.login({ openid })
      if (res.code !== 200) {
        uni.navigateTo({ url: '/pages/login/login' })
      }
      this.search()
      this.getMsgList()
    }
  },
  methods: {
    // 解绑
    unbundle() {
      unbundleApi({ openid: this.openid }).then(res => {
        if (res.code === 200) {
          this.$refs.uToast.show({
            type: 'success',
            message: '注销成功'
          })
          uni.setStorageSync('token', null)
          uni.navigateTo({ url: '/pages/login/login' })
        }
      })
    },
    // 详情按钮
    details({ id }) {
      uni.navigateTo({ url: `/pages/index/details/details?id=${id}` })
    },
    // 查询
    search() {
      getProjectList({ name: this.searchValue }).then(res => {
        this.projectList = res.data
      })
    },
    // 消息列表
    getMsgList() {
      getMsgListApi().then(res => {
        if (res.data.length) {
          res.data.forEach(item => {
            this.msgList += item.field0160
          })
        }
      })
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  background-color: #eff7ff;
  padding-bottom: 50px;
  position: relative;
  min-height: 100%;
  .bg {
    width: 100%;
    display: block;
    margin-top: 90px;
  }
  .user {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 30px;
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
    padding: 20px;
    background: url('@/static/index/卡片背景.png') no-repeat;
    background-size: 100% 100%;
    .details {
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }

    .title {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
      color: #4f7fb0;
    }
    .content {
      position: relative;
      display: flex;
      background: url('@/static/index/内容背景.png') no-repeat;
      background-size: 100% 100%;
      justify-content: space-around;
      padding: 5px;
      margin-top: 10px;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        view {
          margin: 5px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
