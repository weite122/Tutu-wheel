<template>
  <div class="wheel-table-wrapper">
    <table class="wheel-table" :class="{bordered, compact, striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked" :checked="areAllItemSelected"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">{{ column.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource" :key="item.id">
        <td><input type="checkbox" @change="onChangeItem(item,index,$event)"
                   :checked="inSelectedItems(item)"
        ></td>
        <td v-if="numberVisible">{{ index + 1 }}</td>
        <template v-for="column in columns">
          <td :key="item.field">{{ item[column.field] }}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "WheelTable",
  props: {
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
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false
      } else {
        this.$refs.allChecked.indeterminate = true
      }
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
  td, th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }

}
</style>