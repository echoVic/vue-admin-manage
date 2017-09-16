<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        items: [
          {
            icon: 'el-icon-menu',
            index: 'table',
            title: '表格'
          },
          {
            icon: 'el-icon-date',
            index: 'form',
            title: '表单'
          },
          {
            icon: 'el-icon-star-on',
            index: 'charts',
            title: '图表'
          },
          {
            icon: 'el-icon-edit',
            index: 'markdown',
            title: 'Markdown'
          }
        ]
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  /*.sidebar*/
    /*display: block*/
    /*position: absolute*/
    /*width: 250px*/
    /*left: 0*/
    /*top: 70px*/
    /*bottom: 0*/
    /*background: #2E363F*/
    /*ul*/
      /*height: 100%*/
</style>
