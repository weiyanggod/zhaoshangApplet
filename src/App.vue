<script>
import { loginApi } from '@/api'
export default {
  // 全局变量
  globalData: {
    appid: 'wx9b7eb684f20ec1c3',
    secret: 'c96852db592c89efcf0a9b46e0d98960',
    code: ''
  },
  // 初始化完成
  onLaunch: function () {},
  methods: {
    getCode() {
      return new Promise((resolve, reject) => {
        uni.login({
          success: res => {
            if (res.code) {
              this.globalData.code = res.code
              resolve(res.code)
            } else {
              reject(res)
            }
          }
        })
      })
    },
    getOpenId(code) {
      return new Promise(async (resolve, reject) => {
        const res = await loginApi(code)
        resolve(res)
      })
    },
    async login() {
      const code = await this.getCode()
      this.getOpenId(code)
    }
  }
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import '/global.css';
page {
  width: 100%;
  height: 100%;
}
</style>
