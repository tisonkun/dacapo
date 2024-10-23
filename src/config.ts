export const Site = {
    url: new URL(import.meta.env.SITE),
    baseUrl: new URL(import.meta.env.SITE).origin,

    title: "Da Capo",
    description: "Async. Distributed Systems. Open Source.",

    menu: {
        navs: [
            {name: "Home", url: "/"},
            {name: "Categories", url: "/categories"},
            {name: "Tags", url: "/tags"},
            {name: "About", url: "/about"},
        ],
        icons: [
            {
                clz: "fas fa-rss",
                url: "/rss.xml"
            },
            {
                clz: "fab fa-github",
                url: "https://github.com/tisonkun",
            },
            {
                clz: "fab fa-twitter",
                url: "https://twitter.com/tison1096",
            },
        ]
    }
}

export const Social = {
    publicName: "@tison",
    twitterId: "@tison1096",
}
