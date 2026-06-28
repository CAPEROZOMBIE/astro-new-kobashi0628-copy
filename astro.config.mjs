// @ts-check
// astro.config.mjs

import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
integrations: [react()], //検索機能,ハンバーガーメニュー
  output: 'server',
//   adapter: node({
//     mode: 'standalone'
//   }),

  adapter: cloudflare(),
  
  devToolbar: {// 開発ツールバーを無効化
    enabled: false,
  },
  image: {
    domains: ["images.microcms-assets.io"], // microCMSのドメイン
  },
  
});