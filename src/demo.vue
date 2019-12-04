<template>
  <div>
    <g-slides class="wrapper" width="300px" height="200px" :selected="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
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
        selected: undefined
      };
    },
    created() {
      let n = 1
      setInterval(() => {
        if (n === 4) {
          n = 1
        }
        this.selected = n.toString()
        n++
      }, 3000)
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
    width: 200px;
    height: 150px;
    background: #ddd;
    border: 1px solid red;
  }
</style>