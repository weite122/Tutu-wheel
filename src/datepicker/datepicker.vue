<template>
  <div class="wheel-date-picker" style="border: 1px solid #66CC99" ref="wrapper">
    <g-popover ref="popover" position="bottom" :container="popoverContainer">
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
                  <div :class="c('selects')">
                    <select @change="onSelectYear" :value="display.year">
                      <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
                    </select>年
                    <select @change="onSelectMonth" :value="display.month">
                      <option v-for="month in helper.range(0,12)" :key="month" :value="month">{{ month + 1 }}</option>
                    </select>月
                  </div>
                  <div :class="c('returnToDayMode')">
                    <g-button size="small" @click="mode='day'">确认</g-button>
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="c('weekdays')">
                  <span :class="c('weekday')"
                        v-for="i in helper.range(0,7)"
                        :key="i">
                    {{ weekdays[i] }}
                  </span>
                </div>
                <div :class="c('row')" v-for="i in helper.range(1,7)" :key=i>
                <span @click="onClickCell(getVisibleDay(i,j))"
                      :class="[c('cell'),{
                      currentMonth:isCurrentMonth(getVisibleDay(i, j)),
                      selected:isSelected(getVisibleDay(i,j)),
                      today:isToday(getVisibleDay(i,j))
                      }]"
                      v-for="j in helper.range(1,8)" :key="j">
                  {{ getVisibleDay(i, j).getDate() }}
                </span>
                </div>
              </template>
            </div>
          </div>
          <div class="wheel-date-picker-actions">
            <g-button size="small" @click="onClickToday">今天</g-button>
            <g-button size="small" @click="onClickClear">清除</g-button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>

import GInput from '../input'
import GButton from '../button/button'
import GIcon from '../icon'
import GPopover from '../popover/popover'
import helper from '../util/helper.js'
import GScroll from '../scroll/scroll'

export default {
  name: "WheelDatePicker",
  components: {
    GInput,
    GIcon,
    GPopover,
    GScroll,
    GButton
  },
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: Date,
    },
    scope: {
      type: Array,
      default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
    }
  },
  data() {
    let [year, month] = helper.getYearMonthDate(this.value || new Date());
    return {
      mode: 'days',
      helper: helper,
      popoverContainer: null,
      weekdays: ['一', '二', '三', '四', '五', '六', '日'],
      display: {year, month},
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
    isSelected(date) {
      if (!this.value) {
        return false
      }
      let [y, m, d] = helper.getYearMonthDate(date)
      let [y2, m2, d2] = helper.getYearMonthDate(this.value)
      return y === y2 && m === m2 && d === d2
    },
    isToday(date) {
      let [y, m, d] = helper.getYearMonthDate(date)
      let [y2, m2, d2] = helper.getYearMonthDate(new Date())
      return y === y2 && m === m2 && d === d2
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
    onSelectYear(e) {
      const year = e.target.value - 0
      const d = new Date(year, this.display.month)
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.year = year
      } else {
        alert('no')
        e.target.value = this.display.year
      }
    },
    onSelectMonth(e) {
      const month = e.target.value - 0
      const d = new Date(this.display.year, month)
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.month = month
      } else {
        alert('no')
        e.target.value = this.display.month
      }
    },
    onClickToday() {
      const now = new Date()
      const [year, month, day] = helper.getYearMonthDate(now)
      this.display = {year, month}
      this.$emit('input', new Date(year, month, day))
    },
    onClickClear() {
      this.$emit('input', undefined)
      this.$refs.popover.close()
    }
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
      if (!this.value) {
        return ''
      }
      const [year, month, day] = helper.getYearMonthDate(this.value)
      return `${year}-${month + 1}-${day}`
    },
    years() {
      return helper.range(this.scope[0].getFullYear(), this.scope[1].getFullYear() + 1)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "var";
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
    cursor: not-allowed;
    border-radius: $border-radius;
    &.currentMonth {
      color: black;
      cursor: pointer;
      &:hover {
        background: $light-green;
        color: white;
      }
    }
    &.selected {
      border: 1px solid $light-green;
    }
    &.today {
      background: $grey;
    }
  }
  &-selectMonth {
    width: 224px;
    height: 224px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-returnToDayMode {
    margin-top: 8px;
  }
  &-actions {
    padding: 8px;
    text-align: right;
  }
  /deep/ .wheel-popover-content-wrapper {
    padding: 0;
  }
}
</style>
