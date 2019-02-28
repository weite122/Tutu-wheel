<template>
    <div class="tabs-item" :class="classes" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "WheelTabsItem",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .tabs-item {
        padding: 0 2em;
        flex-shrink: 0;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        border: 1px solid rebeccapurple;
        &.active {
            background: #666666;
        }
    }
</style>