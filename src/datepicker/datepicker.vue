<template>
  <div class="wheel-date-picker" style="border: 1px solid #66CC99" ref="wrapper">
    <g-popover position="bottom" :container="x">
      <g-input type="text"/>
      <template slot="content">
        <div class="wheel-date-picker-pop">
          <div class="wheel-date-picker-nav">
            <span><g-icon name="leftleft"/></span>
            <span><g-icon name="left"/></span>
            <span @click="onClickYears">2020年</span>
            <span @click="onClickMonths">12月</span>
            <span><g-icon name="right"/></span>
            <span><g-icon name="rightright"/></span>
          </div>
          <div class="wheel-date-picker-panels">
            <div v-if="mode==='year'" class="wheel-date-picker-content">年</div>
            <div v-else-if="mode==='month'" class="wheel-date-picker-content">月</div>
            <div v-else class="wheel-date-picker-content">
              <div :class="c('weekdays')">
                <span v-for="i in helper.range(0,7)">{{ weekdays[i] }}</span>
              </div>
              <div :class="c('row')" v-for="i in helper.range(1,7)">
                <span :class="c('col')" v-for="j in helper.range(1,8)">
                  {{ visibleDays[(i - 1) * 7 + j - 1].getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div class="wheel-date-picker-actions">
            <button>清除</button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>

import GInput from '../input'
import GIcon from '../icon'
import GPopover from '../popover/popover'
import helper from '../util/helper.js'

export default {
  name: "WheelDatePicker",
  components: {
    GInput,
    GIcon,
    GPopover
  },
  data() {
    return {
      mode: 'days',
      value: new Date(),
      helper: helper,
      x: null,
      weekdays: ['一', '二', '三', '四', '五', '六', '日']
    }
  },
  mounted() {
    this.x = this.$refs.wrapper
  },
  methods: {
    onClickYears() {
      this.mode = 'year'
    },
    onClickMonths() {
      this.mode = 'month'
    },
    c(className) {
      return `wheel-date-picker-${className}`
    }
  },
  computed: {
    visibleDays() {
      let date = this.value
      let first = helper.firstDayOfMonth(date)
      let last = helper.lastDayOfMonth(date)
      let array = []
      let [year, month, day] = helper.getYearMonthDate(date)
      for (let i = first.getDate(); i <= last.getDate(); i++) {
        array.push(new Date(year, month, i))
      }
      let n = first.getDay() === 0 ? 6 : first.getDay() - 1
      let array2 = []
      for (let i = 0; i < n; i++) {
        array2.push(new Date(year, month, -i))
      }
      array2 = array2.reverse()
      let m = 42 - array.length - array2.length
      let array3 = []
      for (let i = 1; i <= m; i++) {
        array3.push(new Date(year, month + 1, i))
      }

      return [...array2, ...array, ...array3]

    }
  }
}
</script>

<style lang="scss" scoped>
.wheel-date-picker {
  &-nav {
    background: #2a8a5e;
  }
  /deep/ .wheel-popover-content-wrapper {
    padding: 0;
  }
}
</style>
