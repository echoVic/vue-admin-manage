<template>
  <div class="login-wrapper">
    <div class="login-title">
      <span>后台管理系统平台</span>
    </div>
    <div class="login-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p class="login-tips">用户名和密码随意填</p>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(ruleForm) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            localStorage.setItem('admin', this.ruleForm.username)
            this.$router.push('/home')
          } else {
            alert('登录失败！')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
    .login-wrapper
      width: 500px
      height: 400px
      position: absolute
      left: 50%
      top: 50%
      margin: -200px 0 0 -250px
      .login-title
        text-align: center
        font-size: 36px
        margin-bottom: 50px
      .login-form
        width:350px
        padding: 35px 35px 15px
        margin: 0 auto
        border: 1px solid #255
        box-shadow: 0 0 25px #cac6c6
        .login-btn
            button
              width: 100%
        .login-tips
          font-size: 12px
          line-height: 30px
          color: #999
</style>
