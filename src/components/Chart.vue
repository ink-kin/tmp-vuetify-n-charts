
<template>
  <div>
    <ve-pie
      :data="chartData"
      :settings="chartSettings"
      :events="chartEvents">
    </ve-pie>
  </div>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.name = e.name
          console.log(e)
        }
      }
      return {
        chartData: {
          columns: ['date', 'userNum'],
          rows: [
            { 'date': '1/1', 'userNum': 1393 },
            { 'date': '1/2', 'userNum': 3530 },
            { 'date': '1/3', 'userNum': 2923 },
            { 'date': '1/4', 'userNum': 1723 },
            { 'date': '1/5', 'userNum': 3792 },
            { 'date': '1/6', 'userNum': 4593 }
          ]
        },
        name: ''
      }
    }
  }
</script>
