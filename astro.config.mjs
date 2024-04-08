import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from '@microflash/remark-callout-directives';

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
                commend: "tip",
            },
            callouts: {
                commend: {
                    title: "Tip"
                },
                assert: {
                    title: "Info"
                }
            }
        }]],
        shikiConfig: {
            theme: 'github-light',
        }
    },
    site: baseUrl,
    integrations: [tailwind({
        applyBaseStyles: false
    }), sitemap(), mdx()]
});
