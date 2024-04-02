export const Site = {
    url: import.meta.env.BASE_URL,

    title: "Da Capo",
    description: "Async. Distributed Systems. Open Source.",

    menu: {
        navs: [
            {name: "Home", url: "/"},
            {name: "About", url: "/about"},
            {name: "Categories", url: "/categories"},
            {name: "Tags", url: "/tags"},
        ],
        icons: [
            {
                clz: "fab fa-github",
                url: "https://github.com/tisonkun",
            },
            {
                clz: "fab fa-twitter",
                url: "https://twitter.com/tisonkuncz",
            }
        ]
    }
}
