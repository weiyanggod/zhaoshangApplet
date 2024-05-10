<template>
  <div class="page">
    <u-navbar safeAreaInsetTop bgColor="#ebf1f3" title="历史跟踪记录" :autoBack="true"> </u-navbar>
    <div
      class="box"
      v-for="(i, ind) in trackCellList"
      :key="ind"
      :style="{ 'margin-top': ind === 0 ? '80px' : '20px' }"
    >
      <u-cell-group :border="false">
        <u-cell v-for="(item, index) in i" :key="index" :titleStyle="{ color: '#929292' }" :title="item.title">
          <view slot="value">
            <view v-if="item.title === '资料上传：' && item.value.length">
              <view class="flex-center" @click="uploadFile(item.value[0])">
                <view class="attachmentBox" v-if="item.title === '资料上传：'">
                  <view class="icon t-icon-PDF ml-5"></view>
                  <view class="ml-5" style="color: #1684fc">{{ item.value[0].fileName }}</view>
                </view>
                <view class="icon t-icon-fujian ml-5" style="font-size: 10px"></view>
              </view>
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
    <view class="empty" v-if="!trackCellList.length">
      <u-empty mode="history" text="暂无记录"> </u-empty>
    </view>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getProjectTrackApi, getProjectDetailUrlApi } from '@/api/index.js'
export default {
  components: {},
  data() {
    return {
      id: '',
      trackCellList: []
    }
  },
  computed: {},
  methods: {
    // 上传
    uploadFile({ fileUrl, fileName }) {
      uni.showLoading({
        title: '打开中',
        mask: true
      })
      getProjectDetailUrlApi({ field0104: fileUrl }).then(res => {
        // 文件后缀
        const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1)
        const fs = uni.getFileSystemManager() //全局唯一的文件管理器
        const url = uni.arrayBufferToBase64(res)
        fs.writeFile({
          filePath: wx.env.USER_DATA_PATH + '/' + fileName, //这里填文件的名字
          data: res,
          encoding: 'binary',
          success() {
            // 打开文档
            uni.openDocument({
              showMenu: true,
              filePath: wx.env.USER_DATA_PATH + '/' + fileName,
              success: () => {
                uni.hideLoading()
              },
              // 如果直接打不开说明不是office文件
              fail: res => {
                uni.previewImage({
                  urls: ['data:image/png;base64,' + url],
                  success: () => {
                    uni.hideLoading()
                  }
                })
              }
            })
          }
        })
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad({ id }) {
    this.id = id
    getProjectTrackApi({ id }).then(res => {
      if (res.data[0] !== null) {
        res.data.forEach(item => {
          let array = [
            {
              title: '日期：',
              value: 'field0033'
            },
            {
              title: '阶段：',
              value: 'field0133'
            },
            {
              title: '项目所在主体：',
              value: 'field0134'
            },
            {
              title: '意向结果：',
              value: 'field0121'
            },
            {
              title: '当前主要问题描述：',
              value: 'field0161'
            },
            {
              title: '日志内容：',
              value: 'field0162'
            },
            {
              title: '资料上传：',
              value: 'trackFiles'
            }
          ]
          array.forEach(i => {
            if (item[i.value] !== null) {
              if (i.value === 'field0033') {
                i.value = dayjs(item[i.value]).format('YYYY-MM-DD')
              } else {
                i.value = item[i.value]
              }
            } else {
              i.value = ''
            }
          })
          this.trackCellList.push(array)
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  display: block;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  .box {
    box-sizing: border-box;
    padding: 0px 10px 30px 10px;
    border-radius: 27px;
    box-shadow: 0px 0px 5px 0px rgba(94, 93, 93, 0.4);
    background-color: #fff;
    margin-top: 80px;
  }
  .attachmentBox {
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    font-size: 10px;
    padding: 5px;
  }
  .empty {
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    transform: translate(-50, -50%);
    display: flex;
    justify-content: center;
  }
}
</style>
