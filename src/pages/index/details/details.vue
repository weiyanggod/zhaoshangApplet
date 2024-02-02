<template>
  <div class="page">
    <u-navbar safeAreaInsetTop placeholder bgColor="#ebf1f3" :title="title" :autoBack="true"> </u-navbar>
    <!-- 基本信息 -->
    <view class="title">
      <view style="color: #157199; font-weight: 600">基本信息</view>
      <view class="flex" style="color: #1684fc; height: 20px; justify-content: flex-end; align-items: flex-end">
        <!-- <u-icon name="download" color="#1684FC" size="20"></u-icon> -->
        <!-- <view style="font-size: 16px">下载</view> -->
      </view>
    </view>
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in basicCellList"
        :key="index"
        :titleStyle="{ color: '#929292' }"
        :title="item.title"
      >
        <view slot="value" style="color: ">
          <view v-if="item.title !== '项目状态：'">
            {{ item.value }}
          </view>
          <view v-else>
            <u-tag
              v-if="item.value === '初始' || item.value === '在办'"
              plainFill
              plain
              :text="item.value"
              size="mini"
            ></u-tag>
            <u-tag v-if="item.value === '缓办'" type="warning" plainFill plain :text="item.value" size="mini"></u-tag>
            <u-tag v-if="item.value === '办结'" type="success" plainFill plain :text="item.value" size="mini"></u-tag>
          </view>
        </view>
      </u-cell>
    </u-cell-group>
    <view class="flex" style="margin: 5px 0px; margin-left: 10px">
      <view class="flex-center ml-10">
        <view class="icon t-icon-xiaobiaotisanjiao"></view>
        <view style="color: #157199; margin-left: 5px"> 投资主体 </view>
      </view>
    </view>
    <view style="padding: 0px 10px" class="flex-center">
      <uni-table ref="subjectTableData" border stripe emptyText="暂无更多数据">
        <uni-tr>
          <uni-th width="50" align="center">序号</uni-th>
          <uni-th align="center">单位名称</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in subjectTableData" :key="index">
          <uni-td align="center">{{ index + 1 }}</uni-td>
          <uni-td>{{ item.field0117 || '' }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <!-- 投资内容 -->
    <view class="title mt-10">
      <view style="color: #157199; font-weight: 600">投资内容</view>
      <view>单位：万元</view>
    </view>
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in InvestmentContentCellList"
        :key="index"
        :titleStyle="{ color: '#929292' }"
        :title="item.title"
      >
        <view slot="value" style="color: ">{{ item.value }}</view>
      </u-cell>
    </u-cell-group>
    <!-- 投资需求 -->
    <view class="title mt-10 mb-10">
      <view style="color: #157199; font-weight: 600">投资需求</view>
    </view>
    <view style="padding: 0px 10px" class="flex-center">
      <uni-table ref="table" border stripe emptyText="暂无更多数据">
        <uni-tr>
          <uni-th width="30" align="center">序号</uni-th>
          <uni-th width="100" align="center">用地方式</uni-th>
          <uni-th width="100" align="left">土地需求(亩)</uni-th>
          <uni-th width="100" align="left">房屋需求(m²)</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in factorDemandTableData" :key="index">
          <uni-td align="center">{{ index + 1 }}</uni-td>
          <uni-td>{{ item.field0135 || '' }}</uni-td>
          <uni-td>{{ item.field0118 || '' }}</uni-td>
          <uni-td>{{ item.field0120 || '' }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <!-- 项目跟踪 -->
    <view class="title mt-10 mb-10">
      <view style="color: #157199; font-weight: 600">项目跟踪</view>
      <view style="color: #3985da" @click="toTrackRecord">历史跟踪记录</view>
    </view>
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in trackCellList"
        :key="index"
        :titleStyle="{ color: '#929292' }"
        :title="item.title"
      >
        <view slot="value" style="color: ">
          <view v-if="item.title !== '当前主要问题描述：' && item.title !== '日志内容：'">
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
    <!-- 项目资料 -->
    <view class="title mt-10 mb-10">
      <view style="color: #157199; font-weight: 600">项目资料</view>
    </view>
    <view style="padding: 0px 10px" class="flex-center">
      <uni-table ref="table" border stripe emptyText="暂无更多数据">
        <uni-tr style="background-color: #157199">
          <uni-th width="30" align="center">序号</uni-th>
          <uni-th align="center">文件描述</uni-th>
          <uni-th width="300" align="center">附件</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in materialTableData" :key="index">
          <uni-td align="center">{{ index + 1 }}</uni-td>
          <uni-td>{{ item.field0103 || '' }}</uni-td>
          <uni-td>
            <view class="attachmentBox" @click="preview(item)">
              <view class="icon t-icon-PDF ml-5"></view>
              <view class="ml-5" style="color: #1684fc">{{ item.fileName || '' }}</view>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
    </view>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getProjectDetailApi, getProjectDetailUrlApi } from '@/api/index.js'
export default {
  components: {},
  data() {
    return {
      id: '',
      data: null,
      title: '',
      // 基本信息单元格数据
      basicCellList: [
        {
          title: '项目全称：',
          value: 'field0002'
        },
        {
          title: '项目状态：',
          value: 'field0131'
        },
        {
          title: '信息来源：',
          value: 'field0049'
        },
        {
          title: '项目所在地：',
          value: 'field0150'
        }
      ],
      // 投资内容单元格数据
      InvestmentContentCellList: [
        {
          title: '投资内容：',
          value: 'field0101'
        },
        {
          title: '所属产业：',
          value: 'field0151'
        },
        {
          title: '投资层级：',
          value: 'field0152'
        },
        {
          title: '投资总额：',
          value: 'field0072'
        },
        {
          title: '资金来源：',
          value: 'field0132'
        },
        {
          title: '固投总额：',
          value: 'field0073'
        },
        {
          title: '年产值预计：',
          value: 'field0074'
        },
        {
          title: '年税收预计：',
          value: 'field0075'
        },
        {
          title: '其他：',
          value: 'field0112'
        }
      ],
      // 投资主体表格数据
      subjectTableData: [],
      // 要素需求表格数据
      factorDemandTableData: [],
      // 项目跟踪
      trackCellList: [
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
        }
      ],
      // 项目资料
      materialTableData: []
    }
  },
  onLoad: function (option) {
    this.id = option.id
    getProjectDetailApi({ id: option.id }).then(res => {
      const data = res.data[0]
      this.title = data.field0054
      const arr = ['basicCellList', 'InvestmentContentCellList', 'trackCellList']
      arr.forEach(i => {
        this[i].forEach(item => {
          if (item.value === 'field0033') {
            item.value = dayjs(data[item.value]).format('YYYY-MM-DD')
          } else {
            item.value = data[item.value]
          }
          if (item.value === null) {
            item.value = ''
          }
        })
      })
      this.factorDemandTableData = data.landDemand
      this.subjectTableData = data.investment
      this.materialTableData = data.projectFiles
    })
  },
  methods: {
    // 打开文档
    preview({ field0104, fileName }) {
      uni.showLoading({
        title: '打开中'
      })
      getProjectDetailUrlApi({ field0104 }).then(res => {
        const fs = uni.getFileSystemManager() //全局唯一的文件管理器
        fs.writeFile({
          filePath: wx.env.USER_DATA_PATH + '/' + fileName, //这里填文件的名字
          data: res,
          encoding: 'binary',
          success(res) {
            uni.openDocument({
              showMenu: true,
              filePath: wx.env.USER_DATA_PATH + '/' + fileName,
              success: function (res) {
                uni.hideLoading()
              }
            })
          }
        })
      })
    },
    toTrackRecord() {
      uni.navigateTo({ url: `/pages/index/trackRecord/trackRecord?id=${this.id}` })
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.page {
  padding-bottom: 50px;
}
.title {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: #f7f7f7;
}
.attachmentBox {
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
}
.t-icon-xiaobiaotisanjiao {
  font-size: 26px;
  transform: rotate(-180deg);
}
.attachmentBox {
  display: flex;
}
::v-deep .uni-table-th {
  background-color: #eff7ff;
  color: #000;
}
::v-deep .u-cell__title-text {
  color: #929292;
}
</style>
