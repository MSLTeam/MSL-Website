import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用文档",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      children: ["start","server-config","frp","p2p","config"],
    },
    "/group",
    {
      text: "用户使用协议",
      icon: "circle-info",
      link: "/eula",
    },
  ],
});
