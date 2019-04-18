<template>
    <div :class="{error}" class="wheel-toast">
        <input :disabled="disabled" :readonly="readonly" :value="value" @blur="$emit('blur', $event.target.value)"
               @change="$emit('change', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               type="text"

        >
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {Icon},
    name: "WheelInput",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wheel-toast {
        display: inline-flex;
        align-items: center;
        font-size: $font-size;

        > &:not(:last-child) {
            margin-right: .5em;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>