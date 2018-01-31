<template>
  <transition name="indicator-toptip">
    <div class="indicator-toptip" v-show="visible">
      <div class="indicator-toptip-wrapper" :style="{ backgroundColor: this.getBgc() }">
        <span class="indicator-text">
          {{text}}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      bgc: {
        info: '#1890ff',
        warning: '#fa8c16'
      }
    }
  },
  props: {
    text: String,
    type: {
      type: String,
      default: 'info'
    }
  },
  methods: {
    getBgc() {
      return this.bgc[this.type];
    }
  }
}
</script>

<style lang="css">
  .indicator-toptip-enter,
  .indicator-toptip-leave-to {
    transform: translateY(-60px);
  }

  .indicator-toptip-enter-active, .indicator-toptip-leave-active {
    transition: transform 0.2s linear;
  }

  .indicator-toptip {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 10;
    opacity: 0.8;
  }

  .indicator-toptip-wrapper {
    color: white;
    font-size: 25px;
    text-align: center;
  }

  .indicator-text {
    line-height: 60px;
  }
</style>
