<template>
  <div class="wheel-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
      <table class="wheel-table" :class="{bordered, compact, striped}" ref="table">
        <thead>
        <tr>
          <th :style="{width:'50px'}">
            <input type="checkbox" @change="onChangeAllItems" ref="allChecked"
                   :checked="areAllItemSelected"></th>
          <th :style="{width: '50px'}" v-if="numberVisible">#</th>
          <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
            <div class="wheel-table-header">
              {{ column.text }}
              <span v-if="column.field in orderBy" class="wheel-table-sorter"
                    @click="changeOrderBy(column.field)">
              <g-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"></g-icon>
              <g-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"></g-icon>
            </span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in dataSource" :key="item.id">
          <td :style="{width: '50px'}">
            <input type="checkbox" @change="onChangeItem(item,index,$event)"
                   :checked="inSelectedItems(item)"
            ></td>
          <td :style="{width: '50px'}" v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="column in columns">
            <td :style="{width: column.width + 'px'}" :key="item.field">{{ item[column.field] }}</td>
          </template>
        </tr>
        </tbody>
      </table>
    </div>

    <div v-if="loading" class="wheel-table-loading">
      <g-icon name="loading"/>
    </div>
  </div>
</template>

<script>
import GIcon from './icon'

export default {
  name: "WheelTable",
  components: {
    GIcon
  },
  props: {
    height: {
      type: Number
    },
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      required: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return array.filter(item => item.id === undefined).length <= 0
      }
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    let table2 = this.$refs.table.cloneNode(false)
    this.table2 = table2
    table2.classList.add('wheel-table-copy')
    let thead = this.$refs.table.children[0]
    let {height} = thead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px'
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    table2.appendChild(this.$refs.table.children[0])
    this.$refs.wrapper.appendChild(table2)
  },
  beforeDestroy() {
    this.table2.remove()
    window.removeEventListener('resize', this.onWindowResize)
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      } else this.$refs.allChecked.indeterminate = this.selectedItems.length !== 0;
    }
  },
  computed: {
    areAllItemSelected() {
      const a = this.dataSource.map(item => item.id).sort()
      const b = this.selectedItems.map(item => item.id).sort()
      let equal = true
      if (a.length !== b.length) {
        return false
      }
      for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) {
        equal = false
        break
      }
      return equal
    }
  },
  methods: {
    onChangeItem(item, index, e) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        copy.push(item)
      } else {
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
    onChangeAllItems(e) {
      let selected = e.target.checked
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[key]
      if (oldValue === 'asc') {
        copy[key] = 'desc'
      } else if (oldValue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "_var.scss";
$grey: darken($grey, 10%);
.wheel-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  &.bordered {
    border: 1px solid $grey;
    td, th {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td, th {
      padding: 4px;
    }
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($grey, 10%);
        }
      }
    }
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    svg {
      width: 9px;
      height: 9px;
      fill: $grey;
      &.active {
        fill: darken($grey, 50%)
      }
      &:first-child {
        position: relative;
        bottom: -1px;
      }
      &:nth-child(2) {
        position: relative;
        top: -1px;
      }
    }
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-wrapper {
    position: relative;
    overflow: auto;
  }
  &-loading {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 50px;
      height: 50px;
      fill: #817f7f;
      @include spin;
    }
  }
  td, th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }
  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
  }
}
</style>