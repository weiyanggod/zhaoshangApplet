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
    getOpenId(phone, code, jsCode, openid) {
      let data = {}
      if (!phone) {
        data = {
          js_code: jsCode,
          code: code ? code : null,
          openid: openid ? openid : ''
        }
      } else {
        data = {
          js_code: jsCode,
          code: code ? code : null,
          phone: phone,
          openid: openid ? openid : ''
        }
      }
      return new Promise(async (resolve, reject) => {
        const res = await loginApi(data)
        resolve(res)
      })
    },
    async login({ code, phone, openid }) {
      const jsCode = await this.getCode()
      const res = await this.getOpenId(phone, code, jsCode, openid)
      return res
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
