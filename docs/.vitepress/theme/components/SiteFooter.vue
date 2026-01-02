<script setup lang="ts">
import { useData } from 'vitepress';

type FooterSection = {
  title: string;
  items: { text: string; link: string }[];
};

const { theme } = useData();

// 从 config.ts 里读自定义配置（没有就用空）
const brandName = (theme.value as any).footerBrand?.name ?? 'SkiHide';
const brandDesc =
  (theme.value as any).footerBrand?.desc ?? '让窗口隐藏更快一步';
const sections = ((theme.value as any).footerSections ?? []) as FooterSection[];

const bottomLeft =
  (theme.value as any).footerBottom?.left ?? '© 2025 SmailPang. 保留所有权利。';
const bottomRight =
  (theme.value as any).footerBottom?.right ?? '使用 VitePress 构建';
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="top">
        <!-- 左侧品牌块 -->
        <div class="brand">
          <div class="name">{{ brandName }}</div>
          <div class="desc">{{ brandDesc }}</div>
        </div>

        <!-- 右侧链接列 -->
        <div class="cols">
          <div v-for="sec in sections" :key="sec.title" class="col">
            <div class="col-title">{{ sec.title }}</div>
            <a
              v-for="it in sec.items"
              :key="it.text"
              class="col-link"
              :href="it.link"
              target="_blank"
              rel="noreferrer"
            >
              {{ it.text }}
            </a>
          </div>
        </div>
      </div>

      <div class="divider" />

      <!-- 底部版权条 -->
      <div class="bottom">
        <div class="left">{{ bottomLeft }}</div>
        <div class="right">{{ bottomRight }}</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.wrap {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 40px 150px 18px; /* ← 左右从 24px 改成 64px */
}

.top {
  display: flex;
  justify-content: space-between;
  gap: 28px;
}

/* 左侧品牌区 */
.brand {
  min-width: 220px;
}
.name {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1.2;
}
.desc {
  margin-top: 10px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  max-width: 360px;
}

/* 右侧多列链接 */
.cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 1fr));
  gap: 26px 54px;
  align-content: start;
}

.col-title {
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--vp-c-text-1);
}

.col-link {
  display: block;
  padding: 6px 0;
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.col-link:hover {
  color: var(--vp-c-brand-1);
}

.divider {
  margin-top: 36px;
  border-top: 1px solid var(--vp-c-divider);
}

/* 底部条：左版权右构建信息 */
.bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 14px;
  color: var(--vp-c-text-3);
  font-size: 13px;
}
.right {
  white-space: nowrap;
}

/* 响应式 */
@media (max-width: 900px) {
  .top {
    flex-direction: column;
  }
  .brand {
    min-width: 0;
  }
  .cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 26px;
  }
}

@media (max-width: 560px) {
  .cols {
    grid-template-columns: 1fr;
  }
  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
