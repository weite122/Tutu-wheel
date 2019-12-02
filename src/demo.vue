<template>
  <div>
    <g-slides>
      <g-slides-item>
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item>
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item>
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
      return {};
    },
    methods: {}
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .box{
    width: 100px;
    height: 350px;
    background: #ddd;
    border: 1px solid red;
  }
</style>