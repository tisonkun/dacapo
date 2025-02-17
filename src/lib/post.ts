import {getCollection} from "astro:content";

export async function getListedPosts() {
    const posts = await getAllPosts();
    return posts.filter((entry) => !entry.data.hidden);
}

export async function getAllPosts() {
    const posts = await getCollection('posts');
    return posts.filter((entry) => !entry.data.draft);
}

