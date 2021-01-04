<template>
  <button :class="[{[`icon-${iconPosition}`]: true},size]" @click="$emit('click')" class="g-button">
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'WheelButton',
  components: {
    'g-icon': Icon
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    },
    size: {
      type: String,
      default: 'middle'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "_var.scss";
.g-button { font-size: $font-size; padding: 0.5em 1em;
  border-radius: $border-radius; border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;
  &:hover { border-color: $border-color-hover; }
  &:active { background-color: $button-active-bg; }
  &:focus { outline: none; }
  > .g-button-content { order: 2; }
  > .icon { order: 1; margin-right: .1em; }
  &.icon-right {
    > .g-button-content { order: 1; }
    > .icon { order: 2; margin-right: 0; margin-left: .1em;}
  }
  .loading {
    @include spin;
  }
  & + & {
    margin-left: 4px;
  }
  &.mini {
    padding: 0;
    font-size: 10px;
  }
  &.small {
    padding: 0.2em 0.5em;
    font-size: 12px;
  }
  &.medium {
    padding: 0.5em 1em;
  }
}

</style>