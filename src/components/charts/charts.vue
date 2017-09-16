<template>
  <div class="charts-wrapper">
    <el-row>
      <el-col :span="12">
        <div ref="chartColumn" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div ref="chartBar" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div ref="chartLine" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div ref="chartPie" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="24">
        <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'

  export default {
    data() {
      return {
        chartColumn: null,
        chartBar: null,
        chartLine: null,
        chartPie: null
      }
    },
    methods: {
      drawColumnChart() {
        this.chartColumn = echarts.init(this.$refs.chartColumn)
        this.chartColumn.setOption({
          title: {text: 'Column Chart'},
          tooltip: {},
          xAxis: {
            data: ['自主品牌', '德系车', '日系车', '美系车', '韩系车']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [40.28, 18.81, 16.35, 12.39, 8.80]
          }]
        })
      },
      drawBarChart() {
        this.chartBar = echarts.init(this.$refs.chartBar)
        this.chartBar.setOption({
          title: {
            text: 'Bar Chart',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
        })
      },
      drawLineChart() {
        this.chartLine = echarts.init(this.$refs.chartLine)
        this.chartLine.setOption({
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      },
      drawPieChart() {
        this.chartPie = echarts.init(this.$refs.chartPie)
        this.chartPie.setOption({
          title: {
            text: 'Pie Chart',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
      drawCharts() {
        this.drawColumnChart()
        this.drawBarChart()
        this.drawLineChart()
        this.drawPieChart()
      }
    },
    mounted: function () {
      this.drawCharts()
    },
    updated: function () {
      this.drawCharts()
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
</style>
