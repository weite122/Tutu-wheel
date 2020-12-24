<template>
  <div class="wheel-date-picker" style="border: 1px solid #66CC99" ref="wrapper">
    <g-popover position="bottom" :container="popoverContainer">
      <g-input type="text" :value="formattedValue"/>
      <template slot="content">
        <div class="wheel-date-picker-pop">
          <div class="wheel-date-picker-nav" @selectstart.prevent>
            <span @click="onClickPrevYear" :class="c('prevYear','navItem')"><g-icon name="leftleft"/></span>
            <span @click="onClickPrevMonth" :class="c('prevMonth','navItem')"><g-icon name="left"/></span>
            <span :class="c('yearAndMonth')" @click="onClickMonth">
              <span>{{ display.year }}年</span>
              <span>{{ display.month + 1 }}月</span>
            </span>
            <span @click="onClickNextMonth" :class="c('nextMonth','navItem')"><g-icon name="right"/></span>
            <span @click="onClickNextYear" :class="c('nextYear','navItem')"><g-icon name="rightright"/></span>
          </div>
          <div class="wheel-date-picker-panels">
            <div class="wheel-date-picker-content">
              <template v-if="mode==='month'">
                <div :class="c('selectMonth')">
                  选择年和月
                </div>

              </template>
              <template v-else>
                <div :class="c('weekdays')">
                  <span :class="c('weekday')" v-for="i in helper.range(0,7)" :key="i">{{ weekdays[i] }}</span>
                </div>
                <div :class="c('row')" v-for="i in helper.range(1,7)" :key=i>
                <span @click="onClickCell(getVisibleDay(i,j))"
                      :class="[c('cell'),{currentMonth:isCurrentMonth(getVisibleDay(i, j))}]"
                      v-for="j in helper.range(1,8)" :key="j">
                  {{ getVisibleDay(i, j).getDate() }}
                </span>
                </div>
              </template>
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
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    let [year, month] = helper.getYearMonthDate(this.value);
    return {
      mode: 'days',
      helper: helper,
      popoverContainer: null,
      weekdays: ['一', '二', '三', '四', '五', '六', '日'],
      display: {year, month}
    }
  },
  mounted() {
    this.popoverContainer = this.$refs.wrapper
  },
  methods: {
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date)
      return year1 === this.display.year && month1 === this.display.month
    },
    onClickCell(date) {
      if (this.isCurrentMonth(date)) {
        this.$emit('input', date)
      }
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row - 1) * 7 + col - 1]
    },
    onClickMonth() {
      if (this.mode !== 'month') {
        this.mode = 'month'
      } else {
        this.mode = 'days'
      }

    },
    c(...classNames) {
      return classNames.map(className => `wheel-date-picker-${className}`)
    },
    onClickPrevYear() {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addYear(oldDate, -1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickPrevMonth() {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addMonth(oldDate, -1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickNextYear() {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addYear(oldDate, 1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
    onClickNextMonth() {
      const oldDate = new Date(this.display.year, this.display.month)
      const newDate = helper.addMonth(oldDate, 1)
      const [year, month] = helper.getYearMonthDate(newDate)
      this.display = {year, month}
    },
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1)
      let first = helper.firstDayOfMonth(date)
      let last = helper.lastDayOfMonth(date)
      let array = []
      let [year, month, day] = helper.getYearMonthDate(date)
      let n = first.getDay()
      let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000
      for (let i = 0; i < 42; i++) {
        array.push(new Date(x + i * 3600 * 24 * 1000))
      }
      return array
    },
    formattedValue() {
      const [year, month, day] = helper.getYearMonthDate(this.value)
      return `${year}-${month + 1}-${day}`
    }
  }
}
</script>

<style lang="scss" scoped>
.wheel-date-picker {
  &-nav {
    display: flex;
  }
  &-yearAndMonth {
    margin: auto;
  }
  &-cell, &-weekday, &-navItem {
    width: 32px;
    height: 32px;
    //border: 1px solid #2a8a5e;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &-cell {
    color: #ddd;
    &.currentMonth {
      color: black;
    }
  }
  &-selectMonth{
    width: 224px;
    height: 224px;
  }
  /deep/ .wheel-popover-content-wrapper {
    padding: 0;
  }
}
</style>
