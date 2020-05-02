<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button>默认按钮</g-button>
        <g-button icon="settings" icon-position="left">左侧按钮</g-button>
        <g-button icon="settings" icon-position="right">右侧按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>

    </div>
</template>
<script>
  import Button from '../../../src/button/button'
  export default {
    components: {
      'g-button': Button
    },
  }
</script>