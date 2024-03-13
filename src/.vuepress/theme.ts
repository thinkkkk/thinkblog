import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://thinkkkk.github.io",

    author: {
        name: "think",
        url: "https://github.com/thinkkkk",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    repo: "thinkkkk/thinkblog",

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: "默认页脚",
    displayFooter: true,

    // 博客相关
    blog: {
        description: "一个后端开发者",
        intro: "/intro.html",
        medias: {
            BiliBili: "https://example.com",
            Email: "mailto:info@example.com",
            Gitee: "https://example.com",
            GitHub: "https://example.com",
            Zhihu: "https://example.com",
        },
    },

    // 加密配置
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
        blog: true,

        // 在启用之前需要安装 @waline/client
        // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        components: {
            components: ["Badge", "VPCard"],
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            component: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
        },
    },
});
