import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from '@microflash/remark-callout-directives';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from "rehype-toc";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import {h} from "hastscript";

const port = 4000;
const isBuild = process.env.npm_lifecycle_script?.includes("astro build");
const baseUrl = isBuild ? 'https://tisonkun.io' : `http://localhost:${port}`;


// https://astro.build/config
export default defineConfig({
    server: {
        port: port
    },
    markdown: {
        remarkPlugins: [remarkDirective, [remarkCalloutDirectives, {
            aliases: {
                info: "assert",
                commend: "tip"
            },
            callouts: {
                commend: {
                    title: "Tip"
                },
                assert: {
                    title: "Info"
                }
            }
        }], [remarkToc, { tight: true, ordered: true } ]],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
            behavior: 'append',
            content(_node) {
                return [h('i.fa-solid.fa-link.header-link')]
            },
        }], rehypeToc],
    },
    site: baseUrl,
    integrations: [tailwind({
        applyBaseStyles: false
    }), sitemap(), expressiveCode({
        themes: ['solarized-light'],
        plugins: [pluginLineNumbers()],
    }), mdx()]
});
