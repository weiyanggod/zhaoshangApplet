<template>
  <web-view :src="'http://view.officeapps.live.com/op/view.aspx?src=' + src"></web-view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      src: ''
    }
  },
  onLoad: function (option) {
    this.src = encodeURIComponent(option.src)
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
