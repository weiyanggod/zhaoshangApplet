<template>
  <div class="page">
    <u-navbar safeAreaInsetTop placeholder bgColor="#ebf1f3" title="上海百事通" :autoBack="true"> </u-navbar>
    <!-- 基本信息 -->
    <view class="title">
      <view style="color: #157199; font-weight: 600">基本信息</view>
      <view class="flex" style="color: #1684fc; height: 20px; justify-content: flex-end; align-items: flex-end">
        <u-icon name="download" color="#1684FC" size="20"></u-icon>
        <view style="font-size: 16px">下载</view>
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
            <u-tag plainFill plain :text="item.value" size="mini"></u-tag>
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
          <uni-td>{{ item.address }}</uni-td>
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
          <uni-td align="center">{{ index }}</uni-td>
          <uni-td>{{ item.address }}</uni-td>
          <uni-td>{{ item.name }}</uni-td>
          <uni-td>{{ item.date }}</uni-td>
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
          <uni-th width="100" align="center">序号</uni-th>
          <uni-th align="center">文件描述</uni-th>
          <uni-th width="300" align="center">附件</uni-th>
        </uni-tr>
        <uni-tr v-for="(item, index) in materialTableData" :key="index">
          <uni-td align="center">{{ index + 1 }}</uni-td>
          <uni-td>{{ item.date }}</uni-td>
          <uni-td>
            <view class="attachmentBox" @click="preview">
              <view class="icon t-icon-PDF ml-5"></view>
              <view class="ml-5" style="color: #1684fc">百事通法务公司及业务简介-2023-8.pdf</view>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
    </view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 基本信息单元格数据
      basicCellList: [
        {
          title: '项目全称：',
          value: '上海百事通法务信息技术有限公司'
        },
        {
          title: '项目状态：',
          value: '初始'
        },
        {
          title: '信息来源：',
          value: '区府办'
        },
        {
          title: '项目所在地：',
          value: '上海'
        }
      ],
      // 投资内容单元格数据
      InvestmentContentCellList: [
        {
          title: '投资内容：',
          value: ''
        },
        {
          title: '所属产业：',
          value: ''
        },
        {
          title: '投资层级：',
          value: ''
        },
        {
          title: '投资总额：',
          value: ''
        },
        {
          title: '资金来源：',
          value: ''
        },
        {
          title: '固投总额：',
          value: ''
        },
        {
          title: '年产值预计：',
          value: ''
        },
        {
          title: '年税收预计：',
          value: ''
        },
        {
          title: '其他：',
          value: ''
        }
      ],

      // 投资主体表格数据
      subjectTableData: [
        {
          address: '上海百事通法务信息技术有限公司'
        }
      ],
      // 要素需求表格数据
      factorDemandTableData: [
        {
          date: '',
          name: '',
          address: '上海百事通法务信息技术有限公司'
        }
      ],
      // 项目跟踪
      trackCellList: [
        {
          title: '日期：',
          value: '测试'
        },
        {
          title: '阶段：',
          value: '测试'
        },
        {
          title: '项目所在主体：',
          value: '测试'
        },
        {
          title: '意向结果：',
          value: '测试'
        },
        {
          title: '当前主要问题描述：',
          value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
        },
        {
          title: '日志内容：',
          value: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
        }
      ],
      // 项目资料
      materialTableData: [
        {
          date: '公司介绍'
        },
        {
          date: '联系人+地址'
        }
      ]
    }
  },
  computed: {},
  methods: {
    preview() {
      uni.downloadFile({
        url: 'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx',
        success: res => {
          if (res.statusCode === 200) {
            console.log('下载成功')
            console.log(res)
          }
        }
      })
      // uni.openDocument
      // uni.navigateTo({
      //   url: '/pages/web/web?src=https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'
      // })
    },
    toTrackRecord() {
      uni.navigateTo({ url: '/pages/index/trackRecord/trackRecord' })
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
