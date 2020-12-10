<template>
  <div class="wheel-table-wrapper">
    <table class="wheel-table" :class="{bordered, compact, striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns">{{ column.text }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource">
        <td><input type="checkbox" @change="onChangeItem(item,index,$event)"
                   :checked="inSelectedItems(item)"
        ></td>
        <td v-if="numberVisible">{{ index + 1 }}</td>
        <template v-for="column in columns">
          <td>{{ item[column.field] }}</td>
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
  methods: {
    onChangeItem(item, index, e) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        copy.push(item)
      } else {
        copy.splice(copy.indexOf(item), 1)
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