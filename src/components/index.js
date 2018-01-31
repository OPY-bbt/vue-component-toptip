import Vue from 'vue';
import ToptipOrigin from './Toptip.vue';

const Toptip = Vue.extend(ToptipOrigin);
let toptip;
let timer;

export default {
  open(options = {}) {
    if (!toptip) {
      toptip = new Toptip({
        el: document.createElement('div')
      });
    }

    if (toptip.visible) {
      return true;
    }

    toptip.text = typeof options === 'string' ? options : options.text || '空';
    toptip.type = options.type || 'info';
    document.body.appendChild(toptip.$el);

    Vue.nextTick(() => {
      toptip.visible = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        toptip.visible = false;
      }, options.delay || 2000);
    });
  },
  close() {
    if (toptip) {
      Vue.nextTick(() => {
        toptip.visible = false;
      })
    }
  }
};
