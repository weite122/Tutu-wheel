<template>
    <div style="padding-top: 16px;">
        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background: #3eaf7c;">
                header
            </g-header>
            <g-content style="height: 100px; background:#2a8a5e;">
                content
            </g-content>
            <g-footer style="height: 50px; background:#3eaf7c;">
                footer
            </g-footer>
        </g-layout>

    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
  import GLayout from '../../../src/layout/layout'
  import GHeader from '../../../src/layout/header'
  import GFooter from '../../../src/layout/footer'
  import GContent from '../../../src/layout/content'
  import GSider from '../../../src/layout/sider'
  export default {
    components: {GLayout, GHeader, GFooter, GContent, GSider}
  }
</script>