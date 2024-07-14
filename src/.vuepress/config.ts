import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Leoching 的网络日志",
  description: "Go Slow, Go Fast.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
