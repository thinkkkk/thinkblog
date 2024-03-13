import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "书籍",
            icon: "book",
            prefix: "book/",
            link: "book/",
            children: "structure",
        },
        {
            text: "关于",
            icon: "laptop-code",
            prefix: "about/",
            children: "structure",
        },
        "intro",
    ],
});
