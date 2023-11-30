import { App, Plugin } from 'vue';

export default {
  install: (app: App) => {
    app.directive('fill', {
      mounted(el, binding) {
        const {
          modifiers: { add, subtract, isMinHeight },
          value
        } = binding;
        let height = window.innerHeight - el.getBoundingClientRect().top;

        let set = () => {
          el.style[isMinHeight ? 'minHeight' : 'height'] = height + 'px';
        };

        if (!value) {
          if (add) {
            console.warn('设置了 add 但是没有 value，不生效');
          }

          if (subtract) {
            console.warn('设置了 subtract 但是没有 value，不生效');
          }

          set();
          return;
        }

        if (typeof value !== 'number') {
          console.warn('value 必须为数字，不生效');
          set();
          return;
        }

        if (!add && !subtract) {
          console.warn('设置了 value，但是没有 add 或 subtract，不生效');
          set();
          return;
        }

        if (add && subtract) {
          console.warn('同时设置了 add 以及 subtract，不生效');
          set();
          return;
        }

        if (add) {
          height += value;
        }

        if (subtract) {
          height -= value;
        }

        set();
      }
    });
  }
} as Plugin;
