<template>
  <div class="header-wrapper">
    <div class="logo">
      <span>ManageSystem</span>
    </div>
    <div class="user">
      <el-dropdown trigger="click" @command="handleCommand" class="el-dropdown-link">
        <img class="avatar" src="../../common/images/avatar.jpg">
        {{username}}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout" style="color:#48576a;">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: 'vic'
      }
    },
    computed: {
      username() {
        return localStorage.getItem('admin') || this.name
      }
    },
    methods: {
      handleCommand(command) {
        if (command === 'loginout') {
          localStorage.removeItem('admin')
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .header-wrapper
    position: relative
    box-sizing: border-box
    width: 100%
    height: 70px
    font-size: 22px
    line-height: 70px
    color: #fff
    .logo
      float: left
      width: 250px
      text-align: center
    .user
      float: right
      padding-right: 50px
      font-size: 16px
      color: #fff
      .el-dropdown-link
        position: relative
        display: inline-block
        padding-left: 50px
        color: #fff
        cursor: pointer
        vertical-align: middle
        .avatar
          position: absolute
          left: 0
          top: 15px
          width: 40px
          height: 40px
          border-radius: 50%
</style>
