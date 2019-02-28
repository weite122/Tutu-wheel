<template>
    <div class="tabs-item" :class="classes" @click="onClick">
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    methods: {
      onClick() {
        if(this.disabled){ return }
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
    $blue: #409EFF;
    $disabled-text-color: grey;
    .tabs-item {
        padding: 0 2em;
        flex-shrink: 0;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            background: #fff;
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            color: $disabled-text-color;
        }
    }
</style>