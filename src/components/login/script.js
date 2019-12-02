
import axios from 'axios'
export default {
  name:"Login",
  data(){
      return {
        loginForm :{},
        loginFormRule:{ 
          username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                ],
          password: [
              {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
      }
  }},
  // ... 代码略
  methods: {
    handleLogin () {
      // ['form'] 中的 form 就是 el-form 标签 ref 属性值
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return
        }
        axios.post('http://127.0.0.1:5000/login', this.loginForm)
          .then(res => {
            const data = res.data
            if (data.status === 200) {
              // 将凭证放到到本地存储（会在路由守卫那里使用）
              var datas = {username:data.username,token:data.token}
              window.localStorage.setItem('token', data.token)
              window.localStorage.setItem('username', data.username)
              window.localStorage.setItem('data', datas)
              // 跳转到首页
              this.$router.push('/users')
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
            } else if (data.status === 400) {
              this.$message.error(data.msg)
            }

          })
      })
    }
  }
  // ... 代码略
}
