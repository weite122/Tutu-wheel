<template>
  <div>
    <g-slides class="wrapper"  :selected.sync="selected">
      <g-slides-item name="aaa">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="bbb">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="ccc">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>
<script>
  import GSlides from "./slides";
  import GSlidesItem from './slides-item'

  export default {
    name: "demo",
    components: {
      GSlides, GSlidesItem
    },
    data() {
      return {
        selected: 'ccc'
      };
    },
    created() {

    },
    methods: {}
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;
    border: 1px solid red;
  }
</style>