<template>
  <div style="border: 1px solid #66CC99">
    <g-popover position="bottom">
      <g-input type="text"/>
      <template slot="content">
        <div class="wheel-date-picker-pop">
          <span><g-icon name="settings"></g-icon></span>
          <span><g-icon name="settings"></g-icon></span>
          <span @click="onClickYears">2020年</span>
          <span @click="onClickMonths">8月</span>
          <span><g-icon name="settings"></g-icon></span>
          <span><g-icon name="settings"></g-icon></span>
          <div class="wheel-date-picker-nav"></div>
          <div class="wheel-date-picker-panels">
            <div v-if="mode==='year'" class="wheel-date-picker-content">年</div>
            <div v-else-if="mode='month'" class="wheel-date-picker-content">月</div>
            <div v-else class="wheel-date-picker-content">日</div>
          </div>
          <div class="wheel-date-picker-actions"></div>
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
      value: new Date()
    }
  },
  mounted() {
    let date = this.value
    let first = helper.firstDayOfMonth(date)
    let last = helper.lastDayOfMonth(date)
    let array = []
    let [year, month, day] = helper.getYearMonthDay(date)
    for (let i = first.getDate(); i <= last.getDate(); i++) {
      array.push(new Date(year, month, i))
    }
    console.log(array)
  },
  methods: {
    onClickYears() {
      this.mode = 'year'
    },
    onClickMonths() {
      this.mode = 'month'
    }
  },
  computed: {
    visibleDays() {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>