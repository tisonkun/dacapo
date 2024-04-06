import _ from "lodash";
import rss from '@astrojs/rss';
import {Site} from "@/config.ts";
import type {APIContext} from "astro";
import {getCollection} from "astro:content";

export async function GET(_ctx: APIContext) {
    const posts = await getCollection('posts');
    const sortedPosts = _.orderBy(posts, (post) => post.data.date, "desc")

    let baseUrl = Site.url.toString();
    // removing trailing slash if found
    // https://example.com/ => https://example.com
    baseUrl = baseUrl.replace(/\/+$/g, "");

    const rssItems = sortedPosts.map((entry) => {
        const title = entry.data.title
        const pubDate = entry.data.date
        const description = entry.data.description
        const link = `${baseUrl}/posts/${entry.slug}`;
        return {title, pubDate, description, link};
    });

    return rss({
        title: Site.title,
        description: Site.description,
        site: baseUrl,
        items: rssItems,
        customData: `<language>en-us</language>`,
    });
}
