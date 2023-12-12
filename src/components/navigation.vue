<template>
  <view class="navigation">
    {{ title }}
    <view class="back">{{}}</view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '首页',
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/index/navigation.png');
  text-align: center;
  width: 100%;
  height: 88px;
  color: #fff;
  .back {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 10%;
  }
}
</style>
