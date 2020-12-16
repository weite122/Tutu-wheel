<template>
  <svg class="g-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './util/svg'

export default {
  name: 'WheelIcon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>