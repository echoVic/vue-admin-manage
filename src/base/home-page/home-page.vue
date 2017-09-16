<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="main-wrapper">
      <div class="sidebar-wrapper">
        <v-sidebar></v-sidebar>
      </div>
      <div class="content-wrapper">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHead from 'base/header/header'
  import VSidebar from 'base/sidebar/sidebar'

  export default {
    components: {
      VHead, VSidebar
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .main-wrapper
    width: 100%
    display: flex
    position: absolute
    top: 70px
    bottom: 0
    overflow: hidden
    background: #fff
    .sidebar-wrapper
      height: 100%
      flex: 0 0 230px
      width: 230px
      background: #324157
    .content-wrapper
      flex: 1
      overflow-y: scroll
      padding: 20px

</style>
