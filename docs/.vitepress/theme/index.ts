import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { h } from 'vue';
import { useRoute } from 'vitepress';

import './custom.css';
import SiteFooter from './components/SiteFooter.vue';

export default {
  extends: DefaultTheme,

  Layout() {
    const route = useRoute();

    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => (route.path === '/' ? h(SiteFooter) : null),
    });
  },
} satisfies Theme;
